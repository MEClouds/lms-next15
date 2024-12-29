import { UserButton } from "./user-button"

import { TeacherButton } from "./teacher-button"
import { SidebarTrigger } from "./ui/sidebar"

export const Navbar = () => {
  return (
    <nav className="w-full h-12 items-center bg-primary-foreground shadow-sm flex justify-between p-2 fixed top-0 ">
      <SidebarTrigger className="md:hidden xs:block" />

      <div className="ms-auto  md:fixed   end-0 md:p-3 gap-x-2 items-center flex">
        <TeacherButton />
        <UserButton />
      </div>
    </nav>
  )
}
