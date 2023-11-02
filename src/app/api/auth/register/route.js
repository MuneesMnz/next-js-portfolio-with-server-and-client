import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  await connect();
  const hasshedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hasshedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("user created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
