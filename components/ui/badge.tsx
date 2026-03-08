import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-150",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/20 text-primary shadow-sm",
        secondary: "border-wood-light bg-wood-light text-text-muted",
        accent: "border-amber-400/30 bg-amber-400/20 text-amber-400",
        outline: "text-gray-300 border border-wood-light hover:border-primary/50",
        featured: "border-transparent bg-primary text-white shadow-lg shadow-orange-900/30",
        success: "border-green-500/30 bg-green-500/20 text-green-400",
        warning: "border-yellow-500/30 bg-yellow-500/20 text-yellow-500",
        danger: "border-red-500/30 bg-red-500/20 text-red-400",
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
