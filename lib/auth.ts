
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from '../prisma/client'
import GoogleProvider from 'next-auth/providers/google'

const adapter = PrismaAdapter(prisma);


export const authOptions: NextAuthOptions = {
  debug: true,
  adapter: adapter, 
  secret: process.env.NEXTAUTH_SECRET,
    providers: [ 
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
}