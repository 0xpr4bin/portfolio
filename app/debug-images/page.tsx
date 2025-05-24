"use client"

import type React from "react"

export default function DebugImagesPage() {
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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.style.display = "none"
    const errorDiv = target.nextElementSibling as HTMLElement
    if (errorDiv) errorDiv.style.display = "block"
  }

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    const errorDiv = target.nextElementSibling as HTMLElement
    if (errorDiv) errorDiv.style.display = "none"
    const successDiv = target.parentElement?.querySelector(".success-indicator") as HTMLElement
    if (successDiv) successDiv.style.display = "block"
  }

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Image Debug Page</h1>
      <p className="mb-4 text-gray-300">This page helps debug which images are loading correctly in production.</p>

      <div className="mb-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
        <h2 className="text-lg font-semibold mb-2 text-blue-400">Instructions:</h2>
        <p className="text-sm text-gray-300 mb-2">
          Make sure your images are uploaded to the{" "}
          <code className="bg-gray-700 px-1 rounded">public/blog-images/</code> folder with these exact names:
        </p>
        <ul className="text-xs text-gray-400 grid grid-cols-2 gap-1">
          {imageList.map((path, index) => (
            <li key={index} className="font-mono">
              {path.split("/").pop()}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageList.map((imagePath, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2 text-emerald-400">{imagePath.split("/").pop()}</h3>
            <div className="relative">
              <img
                src={imagePath || "/placeholder.svg"}
                alt={`Test image ${index + 1}`}
                className="w-full h-32 object-cover rounded"
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
              <div
                className="success-indicator absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded"
                style={{ display: "none" }}
              >
                ✅ Loaded
              </div>
              <div
                className="w-full h-32 bg-red-900 border border-red-700 rounded flex items-center justify-center text-red-300 text-sm absolute top-0 left-0"
                style={{ display: "none" }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">❌</div>
                  <div>Failed to load</div>
                  <div className="text-xs mt-1">Check file exists</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 break-all">{imagePath}</p>

            {/* Direct link test */}
            <div className="mt-2">
              <a
                href={imagePath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline"
              >
                Test direct link →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Troubleshooting:</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• If images show ❌, they're not accessible at the expected paths</li>
          <li>• Click "Test direct link" to see if the image loads in a new tab</li>
          <li>
            • Check that files are in <code className="bg-gray-700 px-1 rounded">public/blog-images/</code>
          </li>
          <li>• Verify file names match exactly (case-sensitive)</li>
          <li>• Make sure files were included in your latest deployment</li>
        </ul>
      </div>
    </div>
  )
}
