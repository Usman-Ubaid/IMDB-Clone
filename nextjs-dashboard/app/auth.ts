import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "../auth.config";
import bcrypt from "bcrypt";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";

const getUser = async (credentials: {
  username?: string;
  password?: string;
}) => {
  try {
    connectToDB();
    if (!credentials.username || !credentials.password) {
      throw new Error("Fill all the fields");
    }
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong Credentials!");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Wrong Credentials!");
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials: { username?: string; password?: string }) {
        try {
          const user = await getUser(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
      }
      return session;
    },
  },
});
