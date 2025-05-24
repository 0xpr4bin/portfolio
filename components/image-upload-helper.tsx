import { Card, CardContent } from "@/components/ui/card"
import { Upload, FolderOpen, Code, CheckCircle } from "lucide-react"

export function ImageUploadHelper() {
  const imageList = [
    { filename: "vulnet-enum.jpg", description: "Initial enumeration screenshot" },
    { filename: "vulnet-nmap-all.jpg", description: "All ports scan" },
    { filename: "vulnet-redis.jpg", description: "Redis exploitation" },
    { filename: "vulnet-redis-exp.jpg", description: "Redis command execution" },
    { filename: "vulnet-responder.jpg", description: "Responder hash capture" },
    { filename: "vulnet-smbmap.jpg", description: "SMB enumeration" },
    { filename: "vulnet-smbclient.jpg", description: "SMB client access" },
    { filename: "vulnet-shell.jpg", description: "Reverse shell" },
    { filename: "vulnet-bloodhound.jpg", description: "BloodHound analysis" },
  ]

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Upload className="mr-2 h-5 w-5 text-emerald-500" />
          Image Upload Checklist
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded">
            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-emerald-400">Blog Structure Complete!</p>
              <p className="text-sm text-gray-300">
                Your blog is working perfectly with placeholder images. The layout, navigation, and content are all
                displaying correctly.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium flex items-center">
              <FolderOpen className="mr-2 h-4 w-4 text-emerald-500" />
              Required Images for Vulnet Active Post:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {imageList.map((image, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-700/50 rounded text-sm">
                  <span className="font-mono text-emerald-400">{image.filename}</span>
                  <span className="text-gray-300">{image.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center">
              <Code className="mr-2 h-4 w-4 text-emerald-500" />
              Quick Setup:
            </h4>
            <ol className="text-sm text-gray-300 space-y-1 ml-4">
              <li>
                1. Create folder: <code className="bg-gray-700 px-1 rounded">public/blog-images/</code>
              </li>
              <li>2. Upload your screenshots with the exact filenames above</li>
              <li>3. Push to GitHub - images will automatically work!</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
