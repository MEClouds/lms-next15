import { useTranslations } from "next-intl"

const CoursePage = () => {
  const t = useTranslations()
  return <div className="p-2">{t("Courses")}</div>
}

export default CoursePage
