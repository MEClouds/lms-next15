import { LucideIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const BackgroundVariants = cva(
  " rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-orange-300",
        success: "bg-green-500",
      },
      size: {
        default: "p-2",
        sm: "p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const IconVariants = cva("", {
  variants: {
    variant: {
      default: "text-orange-800",
      success: "text-green-800",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type BackgroundVariants = VariantProps<typeof BackgroundVariants>
type IconVariants = VariantProps<typeof IconVariants>

interface IconBadgeProps extends BackgroundVariants, IconVariants {
  icon: LucideIcon
}

export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    <div className={cn(BackgroundVariants({ variant, size }))}>
      <Icon className={cn(IconVariants({ variant, size }))} />
    </div>
  )
}
