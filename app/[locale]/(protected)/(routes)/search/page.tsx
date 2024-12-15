import { useTranslations } from "next-intl"

const Page = () => {
  const t = useTranslations()
  return <div className="p-2">{t("Browser")}</div>
}

export default Page
