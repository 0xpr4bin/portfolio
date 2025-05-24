"use client"

import { useState } from "react"

interface BlogImageFallbackProps {
  src: string
  alt: string
  className?: string
}

export function BlogImageFallback({ src, alt, className = "" }: BlogImageFallbackProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  if (imageError) {
    return (
      <div className={`bg-gray-800 border border-gray-700 rounded-lg p-8 text-center ${className}`}>
        <div className="text-gray-400 mb-2">
          <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500">Image not available</p>
        <p className="text-xs text-gray-600 mt-1">{alt}</p>
        <p className="text-xs text-gray-700 mt-1 break-all">{src}</p>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
        className={`rounded-lg shadow-md transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
