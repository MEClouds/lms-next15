import { AppSidebar } from "@/components/ui/app-sidebar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode } from "react"

import { Navbar } from "@/components/navbar"
import { getLogtoContext, signIn } from "@logto/next/server-actions"
import { logtoConfig } from "@/app/(auth)/logto"
import SignIn from "@/app/(auth)/sign-in"

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = await getLogtoContext(logtoConfig)

  if (!isAuthenticated) {
    return (
      <div className="w-full flex items-center justify-center">
        <SignIn
          onSignIn={async () => {
            "use server"
            await signIn(logtoConfig)
          }}
        />
      </div>
    )
  }

  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <div className="w-full h-12 items-center px-2 flex justify-between">
          <SidebarTrigger className="md:hidden xs:block" />
          <Navbar />
        </div>
        {children}
      </main>
    </>
  )
}

export default DashboardLayout
