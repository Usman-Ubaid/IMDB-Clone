import mongoose from "mongoose";

export const connectToDB = async () => {
  const mongoURI = process.env.MONGODB_URL;
  try {
    if (mongoURI) {
      await mongoose.connect(mongoURI);
      console.log("Connected Successfully");
    }
  } catch (error) {
    throw new Error("DB connection failed");
  }
};
