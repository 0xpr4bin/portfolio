"use client"

import Image from "next/image"
import { useState } from "react"

interface MdxImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export function MdxImage({ src, alt, width = 800, height = 450 }: MdxImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Handle image loading
  const handleLoad = () => {
    setIsLoading(false)
  }

  // Handle image error
  const handleError = (err: Error) => {
    console.error("Error loading image:", err)
    setError(err)
    setIsLoading(false)
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-48 bg-gray-800 rounded-lg">
        <p className="text-red-400">Failed to load image: {alt}</p>
      </div>
    )
  }

  return (
    <div className="relative my-6">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt || "Blog image"}
        width={width}
        height={height}
        className={`rounded-lg transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={handleLoad}
        onError={() => handleError(new Error("Failed to load image"))}
      />
    </div>
  )
}
