import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { withAuth } from "@/lib/withAuth";
import Technologies from "@/models/Technologies";

async function updateTechnology(req: Request) {
    const { id, title, description, images } = await req.json();
    const { normal, hover } = images;
    await dbConnect();

    try {
        if (id) {
            const technology = await Technologies.findById(id);

            if (!technology) {
                return NextResponse.json(
                    { error: "Technology not found" },
                    { status: 404 }
                );
            }

            if (title) technology.title = title;
            if (description) technology.description = description;
            if (normal) technology.images.normal = normal;
            if (hover) technology.images.hover = hover;
            await technology.save();

            return NextResponse.json(technology, { status: 200 });
        } else {
            const technology = new Technologies({
                title,
                description,
                images: {
                    normal,
                    hover
                }
            });

            await technology.save();
            return NextResponse.json(technology, { status: 201 });
        }
    } catch (error) {
        console.error("Error updating technology:", error);
        return NextResponse.json(
            { error: "Failed to update technology" },
            { status: 500 }
        );
    }
}

export const PATCH = withAuth(updateTechnology);

async function getTechnologies() {
    await dbConnect();

    try {
        const technologies = await Technologies.find();
        return NextResponse.json(technologies, { status: 200 });
    } catch (error) {
        console.error("Error fetching technologies:", error);
        return NextResponse.json(
            { error: "Failed to fetch technologies" },
            { status: 500 }
        );
    }
}

export const GET = getTechnologies;

async function deleteTechnology(req: Request) {
    const { id } = await req.json();
    await dbConnect();
    try {
        const technology = await Technologies.findByIdAndDelete(id);

        if (!technology) {
            return NextResponse.json(
                { error: "Technology not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Technology deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting technology:", error);
        return NextResponse.json(
            { error: "Failed to delete technology" },
            { status: 500 }
        );
    }
}

export const DELETE = withAuth(deleteTechnology);