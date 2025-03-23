import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Code, Palette, BookOpen, Camera, Utensils, Plane, Dumbbell, Music, Film, Briefcase } from "lucide-react"

const categories = [
  { name: "Technology", icon: Code, color: "bg-blue-100 dark:bg-blue-900" },
  { name: "Design", icon: Palette, color: "bg-purple-100 dark:bg-purple-900" },
  { name: "Education", icon: BookOpen, color: "bg-green-100 dark:bg-green-900" },
  { name: "Photography", icon: Camera, color: "bg-amber-100 dark:bg-amber-900" },
  { name: "Food", icon: Utensils, color: "bg-red-100 dark:bg-red-900" },
  { name: "Travel", icon: Plane, color: "bg-cyan-100 dark:bg-cyan-900" },
  { name: "Fitness", icon: Dumbbell, color: "bg-lime-100 dark:bg-lime-900" },
  { name: "Music", icon: Music, color: "bg-pink-100 dark:bg-pink-900" },
  { name: "Movies", icon: Film, color: "bg-indigo-100 dark:bg-indigo-900" },
  { name: "Business", icon: Briefcase, color: "bg-orange-100 dark:bg-orange-900" },
]

export default function CategoryList() {
  return (
    <ScrollArea className="w-full whitespace-nowrap pb-4">
      <div className="flex w-max space-x-4 px-1">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.name}
              variant="outline"
              className={`flex h-auto flex-col items-center gap-2 p-4 ${category.color}`}
              asChild
            >
              <Link href={`/categories/${category.name.toLowerCase()}`}>
                <Icon className="h-6 w-6" />
                <span>{category.name}</span>
              </Link>
            </Button>
          )
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

