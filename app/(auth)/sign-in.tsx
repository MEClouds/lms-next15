"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

type Props = {
  onSignIn: () => Promise<void>
}

const SignIn = ({ onSignIn }: Props) => {
  const t = useTranslations()

  return (
    <Button
      variant="default"
      onClick={() => {
        onSignIn()
      }}
    >
      {t("SignIn")}
    </Button>
  )
}

export default SignIn
