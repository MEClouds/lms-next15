import { logtoConfig } from "@/app/(auth)/logto"
import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import SignOut from "@/app/(auth)/sign-out"
import SignIn from "@/app/(auth)/sign-in"
import { getTranslations } from "next-intl/server"

export const UserButton = async () => {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig)
  const t = await getTranslations()
  return (
    <>
      {isAuthenticated ? (
        <Popover>
          <PopoverTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={claims?.picture || undefined}
                alt={claims?.name || "User"}
              />
              <AvatarFallback>{claims?.name?.[0] || "?"}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-4">
            <p className="font-medium">
              {t("Hello")}, {claims?.name || t("User")}!
            </p>
            <p>{claims?.sub}</p>
            <SignOut
              onSignOut={async () => {
                "use server"

                await signOut(logtoConfig)
              }}
            />
          </PopoverContent>
        </Popover>
      ) : (
        <SignIn
          onSignIn={async () => {
            "use server"

            await signIn(logtoConfig)
          }}
        />
      )}
    </>
  )
}
