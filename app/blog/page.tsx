import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, ChevronLeft, Clock, Search, Tag } from "lucide-react"
import { getBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog | Prabin Sigdel",
  description: "Security research, tutorials, and insights by Prabin Sigdel",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl font-bold flex items-center">
            <BookOpen className="mr-3 h-8 w-8 text-emerald-500" />
            Security Blog
          </h1>
          <p className="text-xl text-gray-300">
            Insights, tutorials, and research on cybersecurity and penetration testing
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge
            variant="outline"
            className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border-emerald-500/50 cursor-pointer hover:bg-emerald-500/20"
          >
            <Tag className="mr-1 h-3 w-3" /> All Topics
          </Badge>
          <Badge variant="outline" className="px-3 py-1.5 bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700">
            Web Security
          </Badge>
          <Badge variant="outline" className="px-3 py-1.5 bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700">
            Active Directory
          </Badge>
          <Badge variant="outline" className="px-3 py-1.5 bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700">
            Cloud Security
          </Badge>
          <Badge variant="outline" className="px-3 py-1.5 bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700">
            Penetration Testing
          </Badge>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="bg-gray-800/50 border-gray-700 hover:border-emerald-500/50 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors mb-2">
                      {post.title}
                    </h2>
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
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50"
                        >
                          {tag}
                        </Badge>
                      ))}
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
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Prabin Sigdel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
