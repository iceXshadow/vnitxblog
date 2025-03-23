import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#0F172A] text-[#FFFFFF] [a&]:hover:bg-[#1E293B]",
        secondary:
          "border-transparent bg-[#F1F5F9] text-[#0F172A] [a&]:hover:bg-[#E2E8F0]",
        destructive:
          "border-transparent bg-[#EF4444] text-[#FFFFFF] [a&]:hover:bg-[#DC2626] focus-visible:ring-[#FCA5A5]/20 dark:focus-visible:ring-[#FCA5A5]/40 dark:bg-[#DC2626]/70",
        outline:
          "text-[#0F172A] [a&]:hover:bg-[#F1F5F9] [a&]:hover:text-[#0F172A]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
