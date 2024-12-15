"use client"

import { useTranslations } from "use-intl"

export default function Home() {
  const t = useTranslations()
  return <div className="p-2">{t("title")}</div>
}
