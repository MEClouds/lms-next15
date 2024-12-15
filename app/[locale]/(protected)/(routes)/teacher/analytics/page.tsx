import { useTranslations } from "next-intl"

const AnalyticsPage = () => {
  const t = useTranslations()
  return <div className="p-2">{t("Analytics")}</div>
}

export default AnalyticsPage
