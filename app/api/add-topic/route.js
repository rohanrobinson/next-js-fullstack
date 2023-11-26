import { NextResponse } from "next/server";

export async function POST(request) {

    const response = await request.json();
    const { title, content } = response;
    console.log({response});


    //write reponse into database 
    const result = await prisma.post.create({
        data: {
            title, 
            content, 
            published: true,
            author: {
                create: {
                    name: 'Kavitha'
                }
            }
        }
    })


    return NextResponse.json({data: response})



}