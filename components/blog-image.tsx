"use client"

import { useState } from "react"

interface BlogImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export function BlogImage({ src, alt, width = 800, height = 450 }: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative my-6 overflow-hidden rounded-lg bg-gray-800/50">
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-emerald-500"></div>
        </div>
      )}

      {hasError ? (
        <div className="flex h-64 w-full flex-col items-center justify-center space-y-2 bg-gray-800/50 p-4 text-center">
          <span className="text-red-400">Failed to load image</span>
          <span className="text-sm text-gray-400">{alt}</span>
          <span className="text-xs text-gray-500 break-all">{src}</span>
        </div>
      ) : (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}
    </div>
  )
}
