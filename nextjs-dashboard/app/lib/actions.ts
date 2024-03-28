"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, isActive, address, isAdmin } =
    Object.fromEntries(formData);
  try {
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
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: FormData) => {
  const { id, username, email, password, phone, isActive, address, isAdmin } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields: { [key: string]: any } = {
      id,
      username,
      email,
      password,
      phone,
      isActive,
      address,
      isAdmin,
    };

    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key];
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the user");
  }

  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
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
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const { id, title, desc, password, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields: { [key: string]: any } = {
      id,
      title,
      desc,
      password,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key];
    });

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the product");
  }

  revalidatePath("/dashboard/products");
};
