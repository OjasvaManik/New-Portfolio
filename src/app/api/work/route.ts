import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { withAuth } from "@/lib/withAuth";
import Work from "@/models/Work";

async function updateWork(req: Request) {
    const { id, name, description, post, from, to } = await req.json();
    await dbConnect();

    try {
        if (id) {
            const work = await Work.findById(id);

            if (!work) {
                return NextResponse.json(
                    { error: "Work not found" },
                    { status: 404 }
                );
            }

            if (name) work.name = name;
            if (description) work.description = description;
            if (post) work.post = post;
            if (from) work.from = from;
            if (to) work.to = to;

            await work.save();
            return NextResponse.json(work, { status: 200 });
        } else {
            const work = new Work({
                name,
                description,
                post,
                from,
                to
            });

            await work.save();
            return NextResponse.json(work, { status: 201 });
        }
    } catch (error) {
        console.error("Error updating work:", error);
        return NextResponse.json(
            { error: "Failed to update work" },
            { status: 500 }
        );
    }
}

export const PATCH = withAuth(updateWork);

async function getWorks() {
    await dbConnect();

    try {
        const works = await Work.find();
        return NextResponse.json(works, { status: 200 });
    } catch (error) {
        console.error("Error fetching works:", error);
        return NextResponse.json(
            { error: "Failed to fetch works" },
            { status: 500 }
        );
    }
}

export const GET = getWorks;

async function deleteWork(req: Request) {
    const { id } = await req.json();
    await dbConnect();
    try {
        const work = await Work.findByIdAndDelete(id);

        if (!work) {
            return NextResponse.json(
                { error: "Work not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Work deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting work:", error);
        return NextResponse.json(
            { error: "Failed to delete work" },
            { status: 500 }
        );
    }
}

export const DELETE = withAuth(deleteWork);