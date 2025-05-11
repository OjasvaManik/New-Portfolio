import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
    return async function (req: NextRequest) {
        const authHeader = req.headers.get("authorization");

        if (!authHeader) {
            return NextResponse.json({ message: "No token provided" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1];

        try {
            jwt.verify(token, JWT_SECRET);
            return handler(req);
        } catch (err) {
            return NextResponse.json({ message: "Invalid or expired token" }, { status: 403 });
        }
    };
}
