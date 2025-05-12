import dbConnect from "@/lib/dbConnect";
import Profile from "@/models/Profile";
import { NextResponse } from "next/server";
import { withAuth } from "@/lib/withAuth";

async function updateProfile(req: Request) {
    const { name, description, image, socials } = await req.json();
    await dbConnect();

    let profile = await Profile.findOne();

    if (profile) {
        profile.name = name || profile.name;
        profile.description = description || profile.description;
        profile.image = image || profile.image;
        profile.socials = socials || profile.socials;

        await profile.save();
        return NextResponse.json(profile, { status: 200 });
    } else {
        profile = new Profile({
            name,
            description,
            image,
            socials
        });

        await profile.save();
        return NextResponse.json(profile, { status: 201 });
    }
}

export const PATCH = withAuth(updateProfile);

export async function getProfile() {
    await dbConnect();

    const profile = await Profile.findOne();
    if (!profile) {
        return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(profile, { status: 200 });
}

export const GET = getProfile;