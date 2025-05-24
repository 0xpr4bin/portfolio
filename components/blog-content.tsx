"use client"

import { useEffect, useRef } from "react"

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    // Find all images and add click event listeners for lightbox
    const images = contentRef.current.querySelectorAll("img")
    images.forEach((img) => {
      img.classList.add("cursor-pointer", "transition-transform", "hover:scale-105")

      const handleClick = () => {
        const src = img.getAttribute("src")
        const alt = img.getAttribute("alt") || "Image"

        // Create lightbox
        const lightbox = document.createElement("div")
        lightbox.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"

        // Create image container
        const imgContainer = document.createElement("div")
        imgContainer.className = "relative max-w-4xl max-h-[90vh]"

        // Create close button
        const closeBtn = document.createElement("button")
        closeBtn.className = "absolute -top-12 right-0 p-2 text-white hover:text-emerald-400"
        closeBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'

        // Create image
        const lightboxImg = document.createElement("img")
        lightboxImg.src = src || ""
        lightboxImg.alt = alt
        lightboxImg.className = "max-h-[80vh] max-w-full rounded-lg"

        // Create caption
        const caption = document.createElement("div")
        caption.className = "mt-2 text-center text-sm text-gray-300"
        caption.textContent = alt

        // Append elements
        imgContainer.appendChild(closeBtn)
        imgContainer.appendChild(lightboxImg)
        imgContainer.appendChild(caption)
        lightbox.appendChild(imgContainer)
        document.body.appendChild(lightbox)

        // Close handlers
        const closeHandler = (e: Event) => {
          if (e.target === lightbox || e.target === closeBtn) {
            document.body.removeChild(lightbox)
            document.removeEventListener("keydown", keyHandler)
          }
        }

        const keyHandler = (e: KeyboardEvent) => {
          if (e.key === "Escape" && document.body.contains(lightbox)) {
            document.body.removeChild(lightbox)
            document.removeEventListener("keydown", keyHandler)
          }
        }

        lightbox.addEventListener("click", closeHandler)
        document.addEventListener("keydown", keyHandler)
      }

      img.addEventListener("click", handleClick)
    })
  }, [content])

  return (
    <div
      ref={contentRef}
      className="prose prose-invert max-w-none prose-headings:text-emerald-400 prose-a:text-emerald-400 prose-strong:text-white prose-img:rounded-lg prose-img:shadow-md"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
