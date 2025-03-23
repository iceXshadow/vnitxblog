interface CategoryDescriptionProps {
    category: string
  }
  
  export default function CategoryDescription({ category }: CategoryDescriptionProps) {
    const descriptions: Record<string, string> = {
      technology:
        "Explore the latest advancements in technology, from artificial intelligence and blockchain to software development and cybersecurity. Our technology articles provide insights, tutorials, and analysis from industry experts.",
  
      design:
        "Discover principles, trends, and best practices in design across digital and physical mediums. Our design articles cover UI/UX, graphic design, typography, color theory, and more to help you create beautiful and functional designs.",
  
      business:
        "Stay informed about business strategies, entrepreneurship, marketing, and management. Our business articles provide actionable insights for professionals, startups, and established companies navigating today's competitive landscape.",
  
      productivity:
        "Enhance your efficiency and effectiveness with productivity techniques, tools, and mindsets. Our productivity articles help you optimize your workflow, manage time better, and achieve more with less stress.",
  
      education:
        "Explore innovations in learning, teaching methodologies, and educational technology. Our education articles cover topics for students, teachers, and lifelong learners seeking to expand their knowledge and skills.",
  
      photography:
        "Master the art and science of photography with tutorials, gear reviews, and creative inspiration. Our photography articles help both beginners and professionals capture stunning images and tell visual stories.",
  
      food: "Indulge in culinary adventures with recipes, cooking techniques, and food culture explorations. Our food articles celebrate diverse cuisines, ingredients, and the joy of creating and sharing meals.",
  
      travel:
        "Journey to destinations near and far with travel guides, tips, and cultural insights. Our travel articles inspire wanderlust and provide practical advice for making the most of your adventures.",
  
      fitness:
        "Achieve your health and fitness goals with workout routines, nutrition advice, and wellness strategies. Our fitness articles support your journey to a stronger, healthier lifestyle.",
  
      music:
        "Dive into the world of music with artist spotlights, genre explorations, and industry analysis. Our music articles celebrate the sounds that move us and the stories behind them.",
  
      movies:
        "Explore cinema through reviews, analysis, and behind-the-scenes insights. Our movie articles examine the art of filmmaking and the cultural impact of visual storytelling.",
    }
  
    // Return the description for the category or a default one
    return (
      <p className="mt-2 text-lg text-muted-foreground">
        {descriptions[category] ||
          `Explore our collection of articles about ${category}. Find tips, tutorials, and insights from experts in the field.`}
      </p>
    )
  }