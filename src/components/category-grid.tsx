import Link from "next/link"
import {
  Code,
  Palette,
  BookOpen,
  Camera,
  Utensils,
  Plane,
  Dumbbell,
  Music,
  Film,
  Briefcase,
  Lightbulb,
  Heart,
  Leaf,
  Smartphone,
  Home,
  ShoppingBag,
} from "lucide-react"

interface CategoryGridProps {
  showCount?: boolean
}

export default function CategoryGrid({ showCount = false }: CategoryGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <Link
            key={category.name}
            href={`/categories/${category.slug}`}
            className="group flex flex-col items-center rounded-lg border p-6 transition-colors hover:border-primary hover:bg-primary/5"
          >
            <div className={`mb-4 rounded-full p-3 ${category.bgColor}`}>
              <Icon className={`h-8 w-8 ${category.iconColor}`} />
            </div>
            <h3 className="mb-1 text-lg font-medium">{category.name}</h3>
            {showCount && <p className="text-sm text-muted-foreground">{category.count} articles</p>}
          </Link>
        )
      })}
    </div>
  )
}

const categories = [
  {
    name: "Technology",
    slug: "technology",
    icon: Code,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    count: 128,
  },
  {
    name: "Design",
    slug: "design",
    icon: Palette,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    count: 112,
  },
  {
    name: "Business",
    slug: "business",
    icon: Briefcase,
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    count: 94,
  },
  {
    name: "Productivity",
    slug: "productivity",
    icon: Lightbulb,
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    count: 87,
  },
  {
    name: "Education",
    slug: "education",
    icon: BookOpen,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    count: 47,
  },
  {
    name: "Photography",
    slug: "photography",
    icon: Camera,
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    count: 38,
  },
  {
    name: "Food",
    slug: "food",
    icon: Utensils,
    bgColor: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    count: 56,
  },
  {
    name: "Travel",
    slug: "travel",
    icon: Plane,
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    count: 72,
  },
  {
    name: "Fitness",
    slug: "fitness",
    icon: Dumbbell,
    bgColor: "bg-lime-100 dark:bg-lime-900/30",
    iconColor: "text-lime-600 dark:text-lime-400",
    count: 43,
  },
  {
    name: "Music",
    slug: "music",
    icon: Music,
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-pink-600 dark:text-pink-400",
    count: 29,
  },
  {
    name: "Movies",
    slug: "movies",
    icon: Film,
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    count: 34,
  },
  {
    name: "Health",
    slug: "health",
    icon: Heart,
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    iconColor: "text-rose-600 dark:text-rose-400",
    count: 51,
  },
  {
    name: "Environment",
    slug: "environment",
    icon: Leaf,
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    count: 27,
  },
  {
    name: "Technology",
    slug: "mobile",
    icon: Smartphone,
    bgColor: "bg-sky-100 dark:bg-sky-900/30",
    iconColor: "text-sky-600 dark:text-sky-400",
    count: 45,
  },
  {
    name: "Home",
    slug: "home",
    icon: Home,
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    count: 32,
  },
  {
    name: "Shopping",
    slug: "shopping",
    icon: ShoppingBag,
    bgColor: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    count: 39,
  },
]

