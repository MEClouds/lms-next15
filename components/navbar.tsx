import { UserButton } from "./user-button"

import { TeacherButton } from "./teacher-button"

export const Navbar = () => {
  return (
    <nav className="w-full bg-primary-foreground shadow-sm flex p-1 fixed top-0 end-0">
      <div className="ms-auto gap-x-2 items-center flex">
        <TeacherButton />
        <UserButton />
      </div>
    </nav>
  )
}
