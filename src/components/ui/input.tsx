import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[#0F172A] placeholder:text-[#64748B] dark:placeholder:text-[#94A3B8] selection:bg-[#0F172A] selection:text-[#FFFFFF]",
        "border-[#E2E8F0] dark:border-[#334155] flex h-9 w-full min-w-0 rounded-md border bg-transparent",
        "dark:bg-[#1E293B] dark:text-[#E2E8F0]",
        "px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "focus-visible:border-[#3B82F6] focus-visible:ring-[#3B82F6]/30 focus-visible:ring-[3px]",
        "dark:focus-visible:border-[#60A5FA] dark:focus-visible:ring-[#60A5FA]/30",
        "aria-invalid:ring-[#EF4444]/20 dark:aria-invalid:ring-[#EF4444]/40 aria-invalid:border-[#EF4444]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
