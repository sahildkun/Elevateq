import { NextResponse } from "next/server";
import prisma from '../../../../prisma/client'
export async function GET(request: Request) {

    try {
        const data = await prisma.post.findMany({
            include:{
                user: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        });
        return NextResponse.json(data,{status: 200});
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({error :'unable to fetch post'}, {status: 410})
    }
}