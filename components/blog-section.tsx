import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Clock } from "lucide-react"
import { getBlogPosts } from "@/lib/blog"

export async function BlogSection() {
  const posts = await getBlogPosts()
  const recentPosts = posts.slice(0, 3) // Show only the 3 most recent posts

  return (
    <section id="blog" className="py-16">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl font-bold flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-emerald-500" />
          Latest Blog Posts
        </h2>
        <p className="text-gray-400">Insights and articles on cybersecurity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-gray-800/50 border-gray-700 hover:border-emerald-500/50 transition-colors group"
          >
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 gap-4 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-gray-400">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
    </section>
  )
}
