export default function TestImagePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl mb-2">Standard HTML Image</h2>
          <img src="/blog-images/vulnet-enum.jpg" alt="Test Image" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>

        <div>
          <h2 className="text-xl mb-2">Next.js Image Component</h2>
          <img
            src="/blog-images/vulnet-nmap-all.jpg"
            alt="Test Image 2"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">Background Image</h2>
          <div
            className="h-64 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: "url('/blog-images/vulnet-redis.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
