import connectDB from "./connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "./auth";
import User from "@/models/User";

export const authOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          console.log(error);
          throw new Error("server could not handle request");
        }

        if (!email || !password) {
          throw new Error("invalid user credentials");
        }

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("cant find user!");
        }

        const validPassword = await verifyPassword(password, user.password);

        if (!validPassword) {
          throw new Error("email or password is wrong");
        }

        return { email };
      },
    }),
  ],

  callbacks: {
    async session({ session }) {
      // 1. Get user from database
      const user = await User.findOne({ email: session?.user?.email });
      // 2. Assign the user id to the session
      session.user.id = user._id.toString();
      // 3. return session
      return session;
    },
  },
};
