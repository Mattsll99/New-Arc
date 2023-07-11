import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOODLE_ID, 
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ]
}

export default NextAuth(authOptions)