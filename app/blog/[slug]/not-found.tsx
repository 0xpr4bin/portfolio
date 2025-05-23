import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md px-4">
        <h1 className="text-4xl font-bold text-emerald-500">404</h1>
        <h2 className="text-2xl font-semibold">Blog Post Not Found</h2>
        <p className="text-gray-400">The blog post you're looking for doesn't exist or has been moved.</p>
        <div className="pt-4">
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
