import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: string, page: string) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const countUsers = await User.find({
      username: { $regex: regex },
    }).countDocuments();

    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (parseInt(page) - 1));

    return { countUsers, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch the user!");
  }
};

export const fetchProducts = async (q: string, page: string) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const countProducts = await Product.find({
      title: { $regex: regex },
    }).countDocuments();

    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (parseInt(page) - 1));

    return { countProducts, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id: string) => {
  try {
    connectToDB();
    const product = await Product.findById({
      id,
    });

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch the product!");
  }
};
