"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-[#E2E8F0] dark:bg-[#1E293B]/30 data-[state=checked]:bg-[#0F172A] data-[state=checked]:text-[#FFFFFF] dark:data-[state=checked]:bg-[#0F172A] data-[state=checked]:border-[#0F172A] focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-[#EF4444]/20 dark:aria-invalid:ring-[#EF4444]/40 aria-invalid:border-[#EF4444] size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
