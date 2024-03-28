"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, isActive, address, isAdmin } =
    Object.fromEntries(formData);

  connectToDB();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password.toString(), salt);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    phone,
    isActive,
    address,
    isAdmin,
  });

  await newUser.save();

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  connectToDB();

  const newProduct = new Product({
    title,
    desc,
    price,
    stock,
    color,
    size,
  });

  await newProduct.save();

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
