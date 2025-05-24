"use client"

export default function DebugImagesPage() {
  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Image Setup Guide</h1>

      <div className="space-y-6">
        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg">
          <h2 className="text-green-400 font-semibold mb-4">✅ Blog is Working!</h2>
          <p className="text-gray-300 mb-4">
            Your blog is fully functional with placeholder images. The layout, navigation, and content are all working
            perfectly.
          </p>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
          <h2 className="text-blue-400 font-semibold mb-4">📸 Adding Real Images</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Step 1: Create the folder structure</h3>
              <pre className="bg-gray-800 p-3 rounded text-sm">
                {`your-project/
├── public/
│   └── blog-images/
│       ├── vulnet-enum.jpg
│       ├── vulnet-nmap-all.jpg
│       ├── vulnet-redis.jpg
│       ├── vulnet-redis-exp.jpg
│       ├── vulnet-responder.jpg
│       ├── vulnet-smbmap.jpg
│       ├── vulnet-smbclient.jpg
│       ├── vulnet-shell.jpg
│       └── vulnet-bloodhound.jpg`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Step 2: Upload your screenshots</h3>
              <p className="text-gray-300 text-sm">
                Place your actual screenshot images in the{" "}
                <code className="bg-gray-700 px-1 rounded">public/blog-images/</code> folder with the exact names shown
                above.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Step 3: Update the blog content</h3>
              <p className="text-gray-300 text-sm">
                The blog content is already configured to use these image paths. Once you upload the images with the
                correct names, they will automatically replace the placeholders.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Step 4: Deploy</h3>
              <div className="bg-gray-800 p-3 rounded text-sm">
                <code className="text-green-400 block">git add public/blog-images/</code>
                <code className="text-green-400 block">git commit -m "Add blog images"</code>
                <code className="text-green-400 block">git push</code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-white font-semibold mb-4">Current Status</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✅</span>
              Blog structure and navigation working
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✅</span>
              Content displaying correctly
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✅</span>
              Placeholder images showing properly
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">⏳</span>
              Real images pending upload
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
