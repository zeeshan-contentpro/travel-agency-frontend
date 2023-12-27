import User from "@/models/user";
import { dbConnect } from "@/config/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, mobile, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    await dbConnect();

    await User.create({ name, email, mobile, password: hashedPassword });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user" },
      { status: 500 }
    );
  }
}
