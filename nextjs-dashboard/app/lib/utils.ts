import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  const mongoURI = process.env.MONGODB_URL;
  try {
    // if (connection.isConnected) return;
    if (mongoURI) {
      const db = await mongoose.connect(mongoURI);
      console.log(db.connection);
    }
  } catch (error) {
    console.log(error);
    throw new Error("DB connection failed");
  }
};
