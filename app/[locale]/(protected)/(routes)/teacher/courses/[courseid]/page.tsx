import { logtoConfig } from "@/app/(auth)/logto"
import { IconBadge } from "@/components/icon-badge"
import { db } from "@/lib/db"
import { getLogtoContext } from "@logto/next/server-actions"
import { BookOpen } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { redirect } from "next/navigation"
import { TitleForm } from "./_components/title-form"

const CourseIdPage = async ({ params }: { params: { courseid: string } }) => {
  const t = await getTranslations()
  // check user is authenticated
  const { claims } = await getLogtoContext(logtoConfig)
  const userid = claims?.sub ?? null
  if (!userid) {
    redirect("/")
  }
  const course = await db.course.findUnique({
    where: {
      id: params.courseid,
    },
  })

  if (!course) {
    redirect("/")
  }

  const requiredFields = [
    course?.title,
    course?.description,
    course?.imageUrl,
    course?.categoryId,
    course?.price,
  ]

  const totalFields = requiredFields.length
  const completedFields = requiredFields.filter(Boolean).length

  const textOfCompletion = `${completedFields}/${totalFields} ${t(
    "fieldsCompleted"
  )}`

  return (
    <div className="p-5">
      <div className="flex item-center justify-between">
        <div className="flex-col gap-y-2">
          <h1 className="text-2xl font-bold">{t("CourseSetup")}</h1>
          <p className="text-slate-500">{textOfCompletion}</p>
        </div>
      </div>
      {/* create the form */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={BookOpen} />
            <h2>{t("Customize your course")}</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
        </div>
      </div>
    </div>
  )
}
export default CourseIdPage
