import { Card, CardContent } from "@/components/ui/card"
import { Upload, FolderOpen, Code } from "lucide-react"

export function ImageUploadInstructions() {
  return (
    <Card className="bg-gray-800/50 border-gray-700 mt-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Upload className="mr-2 h-5 w-5 text-emerald-500" />
          How to Add Real Images
        </h3>

        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex items-start gap-3">
            <FolderOpen className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">1. Create the images directory</p>
              <p>
                Create a folder called <code className="bg-gray-700 px-1 rounded">public/blog-images</code> in your
                project
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Upload className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">2. Upload your images</p>
              <p>
                Place your screenshot images in the <code className="bg-gray-700 px-1 rounded">public/blog-images</code>{" "}
                folder
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Code className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">3. Update image paths</p>
              <p>
                Replace placeholder URLs with{" "}
                <code className="bg-gray-700 px-1 rounded">/blog-images/your-image.jpg</code>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded">
          <p className="text-emerald-400 text-sm">
            <strong>Note:</strong> The current placeholders will display until you upload real images and update the
            paths in your blog content.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
