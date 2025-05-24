"use client"

import { useState } from "react"

interface BlogImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function BlogImage({ src, alt, width = 800, height = 400, className = "" }: BlogImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Create a placeholder SVG
  const createPlaceholder = (text: string) => {
    const svgContent = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1f2937"/>
        <rect x="10" y="10" width="${width - 20}" height="${height - 20}" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="50%" y="45%" fontFamily="Arial, sans-serif" fontSize="16" fill="#9ca3af" textAnchor="middle" dy=".3em">
          ${text}
        </text>
        <text x="50%" y="55%" fontFamily="Arial, sans-serif" fontSize="12" fill="#6b7280" textAnchor="middle" dy=".3em">
          Image placeholder
        </text>
      </svg>
    `
    return `data:image/svg+xml;base64,${btoa(svgContent)}`
  }

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // If there's an error or no src, show placeholder
  if (imageError || !src) {
    return (
      <div className={`my-6 ${className}`}>
        <img
          src={createPlaceholder(alt) || "/placeholder.svg"}
          alt={alt}
          className="rounded-lg shadow-md mx-auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    )
  }

  return (
    <div className={`relative my-6 ${className}`}>
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
        className={`rounded-lg shadow-md mx-auto cursor-pointer transition-all duration-300 hover:scale-105 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
