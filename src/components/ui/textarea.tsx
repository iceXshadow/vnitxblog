import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[#E2E8F0] placeholder:text-[#64748B] selection:bg-[#0F172A] selection:text-[#FFFFFF] dark:bg-[#1E293B]/30 flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-[#EF4444]/20 dark:aria-invalid:ring-[#EF4444]/40 aria-invalid:border-[#EF4444]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
