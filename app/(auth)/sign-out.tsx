"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

type Props = {
  onSignOut: () => Promise<void>
}

const SignOut = ({ onSignOut }: Props) => {
  const t = useTranslations()
  return (
    <Button
      variant="outline"
      size="sm"
      className="mt-2 w-full"
      onClick={() => {
        onSignOut()
      }}
    >
      {t("SignOut")}
    </Button>
  )
}

export default SignOut
