"use client"
import { BarChart2, Compass, LayoutDashboard, List } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocale, useTranslations } from "next-intl"
// import { usePathname } from "next/navigation"
import { Link, usePathname } from "@/i18n/routing"

import Image from "next/image"
// import { cn } from "@/lib/utils"

export function AppSidebar() {
  const locale = useLocale()
  const side = locale == "ar" ? "right" : "left"
  const pathname = usePathname()
  // const router = useRouter()
  const t = useTranslations()

  // Menu guestRoutes.
  const guestRoutes = [
    {
      title: t("Dashboard"),
      url: "/",
      icon: LayoutDashboard,
      color: "bg-[#D8D2C2]",
    },
    {
      title: t("Browser"),
      url: "/search",
      icon: Compass,
      color: "bg-[#D8D2C2]",
    },
  ]

  // Menu guestRoutes.
  const teacherRoutes = [
    {
      title: t("Courses"),
      url: "/teacher/courses",
      icon: List,
      color: "bg-[#D8D2C2]",
    },
    {
      title: t("Analytics"),
      url: "/teacher/analytics",
      icon: BarChart2,
      color: "bg-[#D8D2C2]",
    },
  ]

  const isTeacherPage = pathname?.startsWith("/teacher")

  const items = isTeacherPage ? teacherRoutes : guestRoutes

  const checkIsActive = (url: string) => {
    return (
      (pathname === "/" && url === "/") ||
      pathname === url ||
      pathname?.startsWith(`${url}/`)
    )
  }

  return (
    <Sidebar side={side}>
      <SidebarHeader>
        <Image
          className="m-2"
          src={"/logo.svg"}
          width={130}
          height={139}
          alt="logo"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={checkIsActive(item.url)} asChild>
                    <Link href={item.url} passHref>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

{
  /* 

// // Menu guestRoutes.
// const guestRoutes = [
//   {
//     title: "Dashboard",
//     url: "/",
//     icon: LayoutDashboard,
//     color: "bg-[#D8D2C2]",
//   },
//   {
//     title: "Browser",
//     url: "/search",
//     icon: Compass,
//     color: "bg-[#D8D2C2]",
//   },
//   // {
//   //   title: "Calendar",
//   //   url: "#",
//   //   icon: Calendar,
//   //   color: "bg-orange-500",
//   // },
//   // {
//   //   title: "Search",
//   //   url: "#",
//   //   icon: Search,
//   //   color: "bg-cyan-700",
//   // },
//   // {
//   //   title: "Settings",
//   //   url: "#",
//   //   icon: Settings,
//   //   color: "bg-gray-400",
//   // },
// ]

  
  custom style
  <SidebarMenuButton
                    className={cn(
                      `h-12 ${item.color} p-0 ps-2 mt-1 text-white  hover:bg-opacity-80 hover:${item.color}/10 hover:text-gray-200`,
                      checkIsActive(item.url) &&
                        ` ring-2 ring-primary ring-offset-1`
                    )}
                    asChild
                  >
                    <Link href={item.url} passHref>
                      <item.icon />
                      <span>{item.title}</span>
                      <div
                        className={cn(
                          "ms-auto opacity-0 h-full w-4 bg-white",
                          checkIsActive(item.url) && "opacity-100"
                        )}
                      />
                    </Link>
 </SidebarMenuButton> */
}
