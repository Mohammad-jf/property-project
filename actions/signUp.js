"use server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import { redirect } from "next/navigation";

async function signUp(formData) {
  await connectDB();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const repassword = formData.get("rePassword");
  if (!email || !password || !repassword) {
    // throw new Error("invalid credentials");
    return { error: "invalid credentials" };
  }

  if (repassword !== password) {
    // throw new Error("password dont match");
    return { error: "passwords dont match" };
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    // throw new Error("user already exist");
    return { error: "user already exist" };
  }

  const hashedPassword = await hashPassword(password);
  const user = await User.create({ name, email, password: hashedPassword });
  if (user) {
    redirect("/signin");
  }
}

export default signUp;
