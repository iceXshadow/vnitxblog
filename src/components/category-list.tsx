import Link from "next/link"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Code, Palette, BookOpen, Camera, Utensils, Plane, Dumbbell, Music, Film, Briefcase } from "lucide-react"

const categories = [
  { name: "Technology", icon: Code, color: "bg-blue-100 dark:hover:bg-blue-500 dark:bg-blue-400"  },
  { name: "Design", icon: Palette, color: "bg-purple-100 dark:hover:bg-purple-500 dark:bg-purple-400" },
  { name: "Education", icon: BookOpen, color: "bg-green-100 dark:hover:bg-green-500 dark:bg-green-400" },
  { name: "Photography", icon: Camera, color: "bg-amber-100 dark:hover:bg-amber-500 dark:bg-amber-400" },
  { name: "Food", icon: Utensils, color: "bg-red-100 dark:hover:bg-red-500 dark:bg-red-400" },
  { name: "Travel", icon: Plane, color: "bg-cyan-100 dark:hover:bg-cyan-500 dark:bg-cyan-400" },
  { name: "Fitness", icon: Dumbbell, color: "bg-lime-100 dark:hover:bg-lime-500 dark:bg-lime-400"  },
  { name: "Music", icon: Music, color: "bg-pink-100 dark:hover:bg-pink-500 dark:bg-pink-400" },
  { name: "Movies", icon: Film, color: "bg-indigo-100 dark:hover:bg-indigo-500 dark:bg-indigo-400" },
  { name: "Business", icon: Briefcase, color: "bg-orange-100 dark:hover:bg-orange-500 dark:bg-orange-400" },
]

export default function CategoryList() {
  return (
    <ScrollArea className="w-full whitespace-nowrap pb-4">
      <div className="flex w-max space-x-4 px-1">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.name}
              className={`flex h-auto flex-col items-center justify-center gap-2 p-4 rounded-md ${category.color}`}
              
            >
              <Link href={`/categories/${category.name.toLowerCase()}`} className="flex items-center flex-col justify-center">
                <Icon className="h-6 w-6" />
                <span>{category.name}</span>
              </Link>
            </button>
          )
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

