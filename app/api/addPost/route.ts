import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
 import { authOptions } from '@/lib/auth';
import prisma from '../../../prisma/client'


export async function GET() {
 
 
  return NextResponse.json({ message :'hello route'});
}

export async function POST(request : Request) {
    const res = await request.json();
    const session = await   getServerSession(authOptions);
    console.log(session);
    if(!session){ 
        console.log('no user')
        return NextResponse.json({message: 'pls sign in to add post'}, {status: 401});
    }



    // else cnsole.log(res);
    // Get user o
    const title: string = res.title;
    const prismaUser = await prisma.user.findUnique({
        where: { email: session?.user?.email },
      })

      if (title.length > 300) {
        return  NextResponse.json({ message: "Please write a shorter post" }, { status: 403 })
      }
  
      if (!title.length) {
        return  NextResponse.json({ message: "Please write a valid post" }, { status: 403 })
      
      }

    try {
        const result = await prisma.post.create({
            data: {
              title,
              userId: prismaUser.id,
            },
          })
        return NextResponse.json(result)
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({error :'unable to create post'})
    }




}