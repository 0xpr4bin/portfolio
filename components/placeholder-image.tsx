interface PlaceholderImageProps {
  width?: number
  height?: number
  text?: string
  className?: string
}

export function PlaceholderImage({ width = 800, height = 400, text = "Image", className = "" }: PlaceholderImageProps) {
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1f2937"/>
      <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="16" fill="#9ca3af" textAnchor="middle" dy=".3em">
        ${text}
      </text>
    </svg>
  `

  const dataUrl = `data:image/svg+xml;base64,${btoa(svgContent)}`

  return (
    <img
      src={dataUrl || "/placeholder.svg"}
      alt={text}
      className={`rounded-lg shadow-md ${className}`}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  )
}
