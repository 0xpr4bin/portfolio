"use client"

import { useState } from "react"

export default function DebugDeploymentPage() {
  const [testResults, setTestResults] = useState<Record<string, any>>({})

  const images = ["vulnet-nmap-all.jpg", "vulnet-redis.jpg", "vulnet-redis-exp.jpg", "vulnet-responder.jpg"]

  const testImageAccess = async (filename: string) => {
    const path = `/blog-images/${filename}`

    try {
      // Test with fetch
      const response = await fetch(path, { method: "HEAD" })

      // Test with Image object
      const imgTest = new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve("Image loads successfully")
        img.onerror = () => reject("Image failed to load")
        img.src = path
      })

      const imgResult = await imgTest.catch((err) => err)

      setTestResults((prev) => ({
        ...prev,
        [filename]: {
          fetchStatus: response.status,
          fetchOk: response.ok,
          imageLoad: imgResult,
          fullUrl: `${window.location.origin}${path}`,
        },
      }))
    } catch (error) {
      setTestResults((prev) => ({
        ...prev,
        [filename]: {
          error: error.toString(),
          fullUrl: `${window.location.origin}/blog-images/${filename}`,
        },
      }))
    }
  }

  const testAllImages = () => {
    images.forEach(testImageAccess)
  }

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Deployment Debug</h1>

      <div className="space-y-6">
        <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
          <h2 className="text-red-400 font-semibold mb-4">🚨 Issue Identified</h2>
          <p className="text-gray-300 mb-2">
            Images show as "Available" in status but aren't actually loading. This usually means:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>Images exist locally but weren't committed to Git</li>
            <li>Images were committed but not deployed to Vercel</li>
            <li>File paths or names don't match exactly</li>
            <li>.gitignore is excluding the images</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Live Image Test</h2>
            <button onClick={testAllImages} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
              Test Production URLs
            </button>
          </div>

          <div className="space-y-4">
            {images.map((filename) => (
              <div key={filename} className="bg-gray-700 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-emerald-400">{filename}</span>
                  <button
                    onClick={() => testImageAccess(filename)}
                    className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs"
                  >
                    Test
                  </button>
                </div>

                {testResults[filename] && (
                  <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                    <div className="space-y-1">
                      {testResults[filename].fetchStatus && (
                        <div>
                          <span className="text-gray-400">HTTP Status:</span>{" "}
                          <span className={testResults[filename].fetchOk ? "text-green-400" : "text-red-400"}>
                            {testResults[filename].fetchStatus}
                          </span>
                        </div>
                      )}
                      {testResults[filename].imageLoad && (
                        <div>
                          <span className="text-gray-400">Image Load:</span>{" "}
                          <span
                            className={
                              testResults[filename].imageLoad.includes("success") ? "text-green-400" : "text-red-400"
                            }
                          >
                            {testResults[filename].imageLoad}
                          </span>
                        </div>
                      )}
                      {testResults[filename].fullUrl && (
                        <div>
                          <span className="text-gray-400">Full URL:</span>{" "}
                          <a
                            href={testResults[filename].fullUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline break-all"
                          >
                            {testResults[filename].fullUrl}
                          </a>
                        </div>
                      )}
                      {testResults[filename].error && (
                        <div>
                          <span className="text-gray-400">Error:</span>{" "}
                          <span className="text-red-400">{testResults[filename].error}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Visual test */}
                <div className="mt-2">
                  <p className="text-xs text-gray-400 mb-1">Visual Test:</p>
                  <img
                    src={`/blog-images/${filename}`}
                    alt={filename}
                    className="max-w-32 h-auto border border-gray-600 rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const errorDiv = target.nextElementSibling as HTMLElement
                      if (errorDiv) errorDiv.style.display = "block"
                    }}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement
                      const errorDiv = target.nextElementSibling as HTMLElement
                      if (errorDiv) errorDiv.style.display = "none"
                    }}
                  />
                  <div className="text-red-400 text-xs p-2 bg-red-900/20 rounded" style={{ display: "none" }}>
                    ❌ Image failed to load
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg">
          <h2 className="text-yellow-400 font-semibold mb-4">🔧 Fix Steps</h2>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-2">Step 1: Verify Git Status</h3>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-green-400 block">cd ~/prabin/portfolio</code>
                <code className="text-green-400 block">git status</code>
                <p className="text-gray-300 mt-1">Check if blog-images/ shows as untracked</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Step 2: Force Add Images</h3>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-green-400 block">git add public/blog-images/ --force</code>
                <code className="text-green-400 block">git commit -m "Force add blog images"</code>
                <code className="text-green-400 block">git push origin main</code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Step 3: Check .gitignore</h3>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-green-400 block">cat .gitignore | grep -E "(jpg|png|blog-images)"</code>
                <p className="text-gray-300 mt-1">Make sure .gitignore doesn't exclude your images</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibent text-white mb-2">Step 4: Verify Deployment</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Go to Vercel Dashboard → Your Project → Deployments</li>
                <li>Check if latest deployment completed successfully</li>
                <li>Look for any build errors or warnings</li>
                <li>Verify deployment includes your image files</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
          <h2 className="text-blue-400 font-semibold mb-4">🎯 Quick Fix Alternative</h2>

          <p className="text-gray-300 mb-3">If the above doesn't work, try this guaranteed method:</p>

          <div className="space-y-2 text-sm">
            <div className="bg-gray-800 p-2 rounded">
              <code className="text-green-400 block">mkdir -p public/images</code>
              <code className="text-green-400 block">cp public/blog-images/* public/images/</code>
              <code className="text-green-400 block">git add public/images/</code>
              <code className="text-green-400 block">git commit -m "Add images to public/images"</code>
              <code className="text-green-400 block">git push</code>
            </div>
            <p className="text-gray-300">Then I'll update the blog to use /images/ instead of /blog-images/</p>
          </div>
        </div>
      </div>
    </div>
  )
}
