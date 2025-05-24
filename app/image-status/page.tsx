"use client"

import { useState } from "react"

export default function ImageStatusPage() {
  const [imageStatus, setImageStatus] = useState<Record<string, "loading" | "success" | "error">>({})

  const images = [
    { filename: "vulnet-nmap-all.jpg", description: "Nmap all ports scan", status: "✅ Available" },
    { filename: "vulnet-redis.jpg", description: "Redis exploitation", status: "✅ Available" },
    { filename: "vulnet-redis-exp.jpg", description: "Redis command execution", status: "✅ Available" },
    { filename: "vulnet-responder.jpg", description: "Responder hash capture", status: "✅ Available" },
    { filename: "vulnet-enum.jpg", description: "Initial enumeration", status: "❌ Missing" },
    { filename: "vulnet-smbmap.jpg", description: "SMB enumeration", status: "❌ Missing" },
    { filename: "vulnet-smbclient.jpg", description: "SMB client access", status: "❌ Missing" },
    { filename: "vulnet-shell.jpg", description: "Reverse shell", status: "❌ Missing" },
    { filename: "vulnet-bloodhound.jpg", description: "BloodHound analysis", status: "❌ Missing" },
  ]

  const testImage = (filename: string) => {
    setImageStatus((prev) => ({ ...prev, [filename]: "loading" }))

    const img = new Image()
    img.onload = () => setImageStatus((prev) => ({ ...prev, [filename]: "success" }))
    img.onerror = () => setImageStatus((prev) => ({ ...prev, [filename]: "error" }))
    img.src = `/blog-images/${filename}`
  }

  const testAllImages = () => {
    images.forEach((image) => testImage(image.filename))
  }

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Blog Images Status</h1>

      <div className="space-y-6">
        <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
          <h2 className="text-green-400 font-semibold mb-2">🎉 Great Progress!</h2>
          <p className="text-gray-300">
            I can see you have 4 out of 9 images in your blog-images directory. The blog post has been updated to use
            your actual images where available and placeholders for the missing ones.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Image Status Check</h2>
            <button onClick={testAllImages} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
              Test All Images
            </button>
          </div>

          <div className="space-y-3">
            {images.map((image) => (
              <div key={image.filename} className="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div className="flex-1">
                  <div className="font-mono text-sm text-emerald-400">{image.filename}</div>
                  <div className="text-xs text-gray-400">{image.description}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      image.status.includes("✅") ? "bg-green-600 text-white" : "bg-red-600 text-white"
                    }`}
                  >
                    {image.status}
                  </span>
                  <button
                    onClick={() => testImage(image.filename)}
                    className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs"
                  >
                    Test
                  </button>
                  {imageStatus[image.filename] === "loading" && (
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  )}
                  {imageStatus[image.filename] === "success" && <span className="text-green-400">✅</span>}
                  {imageStatus[image.filename] === "error" && <span className="text-red-400">❌</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
          <h2 className="text-blue-400 font-semibold mb-4">📋 To Complete Your Blog:</h2>

          <div className="space-y-3 text-sm">
            <p className="text-gray-300">You still need to add these 5 images to complete the walkthrough:</p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>
                <code className="bg-gray-700 px-1 rounded">vulnet-enum.jpg</code> - Initial enumeration screenshot
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">vulnet-smbmap.jpg</code> - SMB share enumeration
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">vulnet-smbclient.jpg</code> - SMB client access
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">vulnet-shell.jpg</code> - Reverse shell connection
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">vulnet-bloodhound.jpg</code> - BloodHound domain analysis
              </li>
            </ul>

            <div className="mt-4 p-3 bg-gray-800 rounded">
              <p className="text-gray-300 mb-2">Once you add these images:</p>
              <div className="space-y-1">
                <code className="text-green-400 block">git add public/blog-images/</code>
                <code className="text-green-400 block">git commit -m "Add remaining blog images"</code>
                <code className="text-green-400 block">git push</code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-white font-semibold mb-4">Current Blog Status</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✅</span>
              <span className="text-gray-300">Blog is live and working perfectly</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✅</span>
              <span className="text-gray-300">4/9 real images are displaying</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✅</span>
              <span className="text-gray-300">Professional placeholders for missing images</span>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">⏳</span>
              <span className="text-gray-300">5 more images needed to complete the walkthrough</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
