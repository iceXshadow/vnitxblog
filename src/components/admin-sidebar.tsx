"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, MessageSquare, BarChart3, Settings, Shield, Tag, Bell } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Posts", href: "/admin/posts", icon: FileText },
    { name: "Comments", href: "/admin/comments", icon: MessageSquare },
    { name: "Categories", href: "/admin/categories", icon: Tag },
    { name: "Moderation", href: "/admin/moderation", icon: Shield },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Notifications", href: "/admin/notifications", icon: Bell },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <Shield className="h-5 w-5" />
          <span>BlogHub Admin</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            A
          </div>
          <div>
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@bloghub.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

