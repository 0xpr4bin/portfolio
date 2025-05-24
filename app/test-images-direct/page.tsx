"use client"

export default function TestImagesDirectPage() {
  const imageList = [
    "/blog-images/vulnet-enum.jpg",
    "/blog-images/vulnet-nmap-all.jpg",
    "/blog-images/vulnet-redis.jpg",
    "/blog-images/vulnet-redis-exp.jpg",
    "/blog-images/vulnet-responder.jpg",
    "/blog-images/vulnet-smbmap.jpg",
    "/blog-images/vulnet-smbclient.jpg",
    "/blog-images/vulnet-shell.jpg",
    "/blog-images/vulnet-bloodhound.jpg",
  ]

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Direct Image Access Test</h1>

      <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
        <h2 className="text-red-400 font-semibold mb-2">Issue Identified:</h2>
        <p className="text-gray-300 text-sm">
          Images are showing as base64 SVG placeholders instead of real images. This means the actual image files are
          not accessible at the expected paths.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Test Each Image Path:</h2>

        {imageList.map((imagePath, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-emerald-400">{imagePath}</span>
              <a
                href={imagePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
              >
                Test Direct Access
              </a>
            </div>

            <div className="text-xs text-gray-400">
              Expected file: <code>public{imagePath}</code>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
        <h3 className="text-yellow-400 font-semibold mb-2">Next Steps:</h3>
        <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
          <li>Click "Test Direct Access" for each image above</li>
          <li>If you get a 404 error, the image file doesn't exist at that path</li>
          <li>If you see a placeholder SVG, the fallback system is working</li>
          <li>If you see the actual image, then there's an issue with the blog parser</li>
        </ol>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">File Structure Check:</h3>
        <p className="text-sm text-gray-300 mb-2">Your project should have this structure:</p>
        <pre className="bg-gray-900 p-3 rounded text-xs overflow-x-auto">
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
│       └── vulnet-bloodhound.jpg
├── app/
├── components/
└── lib/`}
        </pre>
      </div>
    </div>
  )
}
