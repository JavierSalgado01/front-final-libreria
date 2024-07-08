import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/app/models/user";

export async function GET() {
    const body = await User.find({});
    mongoose.connect(process.env.MONGO_URL);
    return NextResponse.json(Users);
}