import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, Clock, Share2 } from "lucide-react"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog"
import type { Metadata } from "next"
import { BlogContent } from "@/components/blog-content"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import "../syntax-highlight.css"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | Prabin Sigdel`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Function to convert markdown to HTML with a more direct approach for images
  const markdownToHtml = (markdown: string) => {
    // Split the markdown into lines
    const lines = markdown.split("\n")
    let html = ""

    // Process each line
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]

      // Check if the line is an image
      if (line.trim().startsWith("![") && line.includes("](") && line.includes(")")) {
        // Extract alt text and URL
        const altStart = line.indexOf("![") + 2
        const altEnd = line.indexOf("](")
        const urlStart = altEnd + 2
        const urlEnd = line.indexOf(")", urlStart)

        if (altStart > 1 && altEnd > altStart && urlStart > altEnd && urlEnd > urlStart) {
          const alt = line.substring(altStart, altEnd)
          const url = line.substring(urlStart, urlEnd)

          // Create the image HTML
          html += `<img src="${url}" alt="${alt}" class="my-6 rounded-lg max-w-full h-auto shadow-md mx-auto" loading="lazy" />\n`
          continue
        }
      }

      // Headers
      if (line.startsWith("# ")) {
        html += `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(2)}</h1>\n`
        continue
      }
      if (line.startsWith("## ")) {
        html += `<h2 class="text-2xl font-bold mt-6 mb-3">${line.substring(3)}</h2>\n`
        continue
      }
      if (line.startsWith("### ")) {
        html += `<h3 class="text-xl font-bold mt-5 mb-2">${line.substring(4)}</h3>\n`
        continue
      }
      if (line.startsWith("#### ")) {
        html += `<h4 class="text-lg font-bold mt-4 mb-2">${line.substring(5)}</h4>\n`
        continue
      }

      // Bold and italic (process these after we've handled special lines)
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      line = line.replace(/\*(.*?)\*/g, "<em>$1</em>")

      // Links
      line = line.replace(
        /\[(.*?)\]$$(.*?)$$/g,
        '<a href="$2" class="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
      )

      // Code blocks
      if (line.trim() === "```" || line.trim().startsWith("```")) {
        // Start of code block
        if (!line.trim().startsWith("```") || line.trim() === "```") {
          // Simple code block without language
          html += '<pre class="syntax-highlight"><code>\n'
        } else {
          // Code block with language
          const lang = line.trim().substring(3).trim()
          html += `<pre class="syntax-highlight"><code class="language-${lang}">\n`
        }

        // Collect all lines until the closing \`\`\`
        let codeContent = ""
        i++
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeContent += lines[i] + "\n"
          i++
        }

        html += codeContent + "</code></pre>\n"
        continue
      }

      // Inline code
      line = line.replace(/`(.*?)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded text-emerald-300">$1</code>')

      // Lists
      if (line.match(/^\d+\. /)) {
        html += `<li class="ml-6 list-decimal mb-2">${line.replace(/^\d+\. /, "")}</li>\n`
        continue
      }
      if (line.match(/^- /)) {
        html += `<li class="ml-6 list-disc mb-2">${line.replace(/^- /, "")}</li>\n`
        continue
      }

      // Paragraphs (only if the line is not empty and not already a special element)
      if (line.trim() !== "" && !line.startsWith("<")) {
        html += `<p class="mb-4">${line}</p>\n`
      } else if (line.trim() === "") {
        html += "\n"
      } else {
        html += line + "\n"
      }
    }

    return html
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/blog" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Blog</span>
            </Link>
          </div>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
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
            <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
          </div>

          <BlogContent content={markdownToHtml(post.content)} />

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                Copy Link
              </Button>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Prabin Sigdel. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Add the syntax highlighter component */}
      <SyntaxHighlighter />
    </div>
  )
}
