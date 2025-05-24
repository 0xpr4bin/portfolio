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

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Image Debug Page</h1>
      <p className="mb-4 text-gray-300">This page helps debug which images are loading correctly in production.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageList.map((imagePath, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2 text-emerald-400">{imagePath.split("/").pop()}</h3>
            <div className="relative">
              <img
                src={imagePath || "/placeholder.svg"}
                alt={`Test image ${index + 1}`}
                className="w-full h-32 object-cover rounded"
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
              <div
                className="w-full h-32 bg-red-900 border border-red-700 rounded flex items-center justify-center text-red-300 text-sm"
                style={{ display: "none" }}
              >
                ❌ Failed to load
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 break-all">{imagePath}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Green checkmarks indicate images that loaded successfully</li>
          <li>• Red X marks indicate images that failed to load</li>
          <li>• Check the browser console for additional error details</li>
          <li>
            • Visit this page at: <code className="bg-gray-700 px-1 rounded">your-domain.com/debug-images</code>
          </li>
        </ul>
      </div>
    </div>
  )
}
