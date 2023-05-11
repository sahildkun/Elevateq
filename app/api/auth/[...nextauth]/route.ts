import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../../prisma/client'


const adapter = PrismaAdapter(prisma);

export const authOptions = {
  adapter: PrismaAdapter(prisma), 
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
}

console.log({
    clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})
const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST };