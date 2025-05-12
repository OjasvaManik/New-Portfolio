import dbConnect from "@/lib/dbConnect";
import Certificates from "@/models/Certificates";
import { NextResponse } from "next/server";
import { withAuth } from "@/lib/withAuth";

async function updateCertificate(req: Request) {
    const { id, title, description, image, date, issuer } = await req.json();
    await dbConnect();

    try {
        if (id) {
            // Find the certificate first
            const existingCertificate = await Certificates.findById(id);

            if (!existingCertificate) {
                return NextResponse.json(
                    { error: "Certificate not found" },
                    { status: 404 }
                );
            }

            // Update fields using the save method to ensure middleware runs
            if (title) existingCertificate.title = title;
            if (description) existingCertificate.description = description;
            if (image) existingCertificate.image = image;
            if (date) existingCertificate.date = date;
            if (issuer) existingCertificate.issuer = issuer;

            // Save to trigger pre-save hook that generates the slug
            await existingCertificate.save();

            return NextResponse.json(existingCertificate, { status: 200 });
        } else {
            // For new documents, the pre-save hook will run automatically
            const certificate = new Certificates({
                title,
                description,
                image,
                date,
                issuer
            });

            await certificate.save();
            return NextResponse.json(certificate, { status: 201 });
        }
    } catch (error) {
        console.error("Error updating certificate:", error);
        return NextResponse.json(
            { error: "Failed to update certificate" },
            { status: 500 }
        );
    }
}

export const PATCH = withAuth(updateCertificate);

async function getCertificates() {
    await dbConnect();

    try {
        const certificates = await Certificates.find();
        return NextResponse.json(certificates, { status: 200 });
    } catch (error) {
        console.error("Error fetching certificates:", error);
        return NextResponse.json(
            { error: "Failed to fetch certificates" },
            { status: 500 }
        );
    }
}

export const GET = getCertificates;

async function deleteCertificate(req: Request) {
    const { id } = await req.json();
    await dbConnect();
    try {
        const certificate = await Certificates.findByIdAndDelete(id);

        if (!certificate) {
            return NextResponse.json(
                { error: "Certificate not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Certificate deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting certificate:", error);
        return NextResponse.json(
            { error: "Failed to delete certificate" },
            { status: 500 }
        );
    }
}

export const DELETE = withAuth(deleteCertificate);