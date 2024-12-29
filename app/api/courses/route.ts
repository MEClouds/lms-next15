import { logtoConfig } from "@/app/(auth)/logto"
import { db } from "@/lib/db"
import { getLogtoContext } from "@logto/next/server-actions"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig)

    const { title } = await req.json()

    if (!isAuthenticated) {
      return new NextResponse("UnAuthorized", { status: 401 })
    }

    const userId =
      claims?.sub ??
      (() => {
        throw new Error("User ID is undefined")
      })()

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.log("ERROR", error)
  }
}
