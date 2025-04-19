import { logtoConfig } from "@/app/(auth)/logto"
import { getLogtoContext } from "@logto/next/server-actions"
import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

const handelAuth = async () => {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig)

  if (!isAuthenticated) {
    throw new Error("unauthenticated")
  }
  const userId =
    claims?.sub ??
    (() => {
      throw new Error("user id is undefined ")
    })()

  return { userId }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handelAuth())
    .onUploadComplete(() => {}),

  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handelAuth())
    .onUploadComplete(() => {}),

  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handelAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
