import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import Admin from '@/models/Admin';

export async function POST(req: Request) {
    const { email, password } = await req.json();
    await dbConnect();

    const admin = await Admin.findOne({ email });
    if (!admin) return NextResponse.json({ error: 'Invalid email' }, { status: 401 });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return NextResponse.json({ error: 'Invalid password' }, { status: 401 });

    const expiresIn = 7 * 24 * 60 * 60; // 7 days in seconds
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, { expiresIn });

    return NextResponse.json({
        success: true,
        token,
        expiresIn
    }, { status: 200 });
}
