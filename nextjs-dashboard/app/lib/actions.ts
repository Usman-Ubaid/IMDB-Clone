"use server";

import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, isActive, address, isAdmin } =
    Object.fromEntries(formData);

  connectToDB();
  const newUser = new User({
    username,
    email,
    password,
    phone,
    isActive,
    address,
    isAdmin,
  });

  await newUser.save();

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
