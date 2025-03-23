import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[#0F172A] placeholder:text-[#64748B] selection:bg-[#0F172A] selection:text-[#FFFFFF] dark:bg-[#1E293B]/30 border-[#E2E8F0] flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-[#EF4444]/20 dark:aria-invalid:ring-[#EF4444]/40 aria-invalid:border-[#EF4444]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
