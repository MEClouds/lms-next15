"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "@/i18n/routing"
import { useTranslations } from "next-intl"

const CoursePage = () => {
  const t = useTranslations()
  const router = useRouter()
  return (
    <div className="p-2">
      <Button onClick={() => router.push("/teacher/create")}>
        {t("createCourse")}
      </Button>
    </div>
  )
}

export default CoursePage
