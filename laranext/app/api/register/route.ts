import { NextResponse } from "next/server"
import { hash } from "bcrypt"

export async function POST(req: Request) {
    
    const {email, password} = await req.json()
    const hashed = await hash(password, 12)

    // const user = await prisma.user.create({
    //     data: {
    //         email, password: hashed
    //     }
    // })

    return NextResponse.json({
        user: {
            email: user.email
        }
    })
}