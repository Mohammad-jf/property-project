import GoogleProvider from "next-auth/providers/google";

export default authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // for choosing google account manualy
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    // invoked on successful signin
    async signIn({ profile }) {
      // 1.connect to DB
      // 2.check if user exist
      // 3.if not create user
      // 4.return true to allow sign in
    },

    // session call back that modifies session object
    async session({ session }) {
      // 1.get user from db
      // 2. assign user id from session
      // 3. return session
    },
  },
};
