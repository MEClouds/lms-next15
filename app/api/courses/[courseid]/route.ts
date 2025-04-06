import { logtoConfig } from "@/app/(auth)/logto"
import { db } from "@/lib/db"
import { getLogtoContext } from "@logto/next/server-actions"
import { NextResponse } from "next/server"

export async function PATCH(
  req: Request,
  { params }: { params: { courseid: string } }
) {
  try {
    const { courseid } = params
    const values = await req.json()
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig)
    if (!isAuthenticated) {
      {
        return new NextResponse("Unauthenticated", { status: 401 })
      }
    }
    const userId =
      claims?.sub ??
      (() => {
        throw new Error("userid is not defined")
      })()

    const course = await db.course.update({
      where: {
        id: courseid,
        userId,
      },
      data: {
        ...values,
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.log("[CourseID]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
