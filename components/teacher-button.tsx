"use client"
import { Link, usePathname } from "@/i18n/routing"

import { Button } from "./ui/button"
import { useTranslations } from "use-intl"

export const TeacherButton = () => {
  const pathname = usePathname()
  const t = useTranslations()

  const isTeacherPage = pathname?.startsWith("/teacher")
  const isPlayerPage = pathname?.includes("/chapter")
  return (
    <div>
      {isTeacherPage || isPlayerPage ? (
        <Link href={"/"}>
          <Button variant={"ghost"}>{t("exit")}</Button>
        </Link>
      ) : (
        <Link href={"/teacher/courses"}>
          <Button variant={"ghost"}>{t("TeacherMode")}</Button>
        </Link>
      )}
    </div>
  )
}
