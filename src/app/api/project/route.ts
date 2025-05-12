import {withAuth} from "@/lib/withAuth";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import Technologies from "@/models/Technologies";

export async function validateTechnologyIds(technologies: string[]): Promise<{ valid: boolean, invalidIds: string[] }> {
    if (!Array.isArray(technologies)) {
        return { valid: false, invalidIds: technologies as unknown as string[] };
    }

    const validTechs = await Technologies.find({ _id: { $in: technologies } }).select('_id');
    const validIds = validTechs.map(t => t._id.toString());

    const invalidIds = technologies.filter(id => !validIds.includes(id));
    return {
        valid: invalidIds.length === 0,
        invalidIds
    };
}

async function updateProject(req: Request) {
    const { id, title, description, images, technologies, link } = await req.json();
    await dbConnect();

    try {
        if (id) {
            const project = await Project.findById(id).populate('technologies');

            if (!project) {
                return NextResponse.json(
                    { error: "Project not found" },
                    { status: 404 }
                );
            }

            if (technologies) {
                const { valid, invalidIds } = await validateTechnologyIds(technologies);
                if (!valid) {
                    return NextResponse.json(
                        { error: `Invalid technology IDs: ${invalidIds.join(', ')}` },
                        { status: 400 }
                    );
                }
            }

            if (title) project.title = title;
            if (description) project.description = description;
            if (images) project.images = images;
            if (technologies) project.technologies = technologies;
            if (link) project.link = link;

            await project.save();
            await project.populate('technologies');
            return NextResponse.json(project, { status: 200 });
        } else {
            if (technologies) {
                const { valid, invalidIds } = await validateTechnologyIds(technologies);
                if (!valid) {
                    return NextResponse.json(
                        { error: `Invalid technology IDs: ${invalidIds.join(', ')}` },
                        { status: 400 }
                    );
                }
            }
            const project = new Project({
                title,
                description,
                images,
                technologies,
                link
            });

            await project.save();
            return NextResponse.json(project, { status: 201 });
        }
    } catch (error) {
        console.error("Error updating project:", error);
        return NextResponse.json(
            { error: "Failed to update project" },
            { status: 500 }
        );
    }
}

export const PATCH = withAuth(updateProject);

async function getProjects() {
    await dbConnect();

    try {
        const projects = await Project.find().populate('technologies');
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json(
            { error: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}

export const GET = getProjects;

async function deleteProject(req: Request) {
    const { id } = await req.json();
    await dbConnect();
    try {
        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting project:", error);
        return NextResponse.json(
            { error: "Failed to delete project" },
            { status: 500 }
        );
    }
}

export const DELETE = withAuth(deleteProject);