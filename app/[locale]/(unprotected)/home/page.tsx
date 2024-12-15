import { useTranslations } from "next-intl"

const Home = () => {
  const t = useTranslations()
  return <div>{t("Hello")}</div>
}

export default Home
