"use client"

export default function CheckStructurePage() {
  const expectedFiles = [
    "vulnet-enum.jpg",
    "vulnet-nmap-all.jpg",
    "vulnet-redis.jpg",
    "vulnet-redis-exp.jpg",
    "vulnet-responder.jpg",
    "vulnet-smbmap.jpg",
    "vulnet-smbclient.jpg",
    "vulnet-shell.jpg",
    "vulnet-bloodhound.jpg",
  ]

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Project Structure Check</h1>

      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Expected File Structure:</h2>
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
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

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Checklist:</h2>
          <div className="space-y-2">
            {[
              "Created public/blog-images/ folder",
              "Uploaded all 9 image files",
              "File names match exactly (case-sensitive)",
              "Files are .jpg format",
              "Committed and pushed to GitHub",
              "Deployment completed successfully",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg">
          <h3 className="text-yellow-400 font-semibold mb-2">Common Issues:</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• File names don't match exactly (check case sensitivity)</li>
            <li>• Images not in the correct folder (must be public/blog-images/)</li>
            <li>• Files not committed to Git repository</li>
            <li>• Deployment didn't include the new files</li>
            <li>• Browser cache showing old version</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
