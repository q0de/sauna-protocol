import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-150 hover:scale-[1.03]",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#ff6b6b] text-white shadow-sm shadow-red-500/15",
        secondary: "border-transparent bg-[#2196f3] text-white shadow-sm shadow-blue-500/15",
        accent: "border-transparent bg-[#f59e0b] text-white shadow-sm shadow-orange-500/15",
        outline: "text-gray-900 border-2 border-gray-300 hover:border-gray-400",
        featured: "border-transparent bg-gradient-to-r from-[#ff6b6b] via-[#ff8566] to-[#f59e0b] text-white shadow-md shadow-orange-500/25 animate-pulse-subtle",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

