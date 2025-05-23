"use client"

import { useEffect } from "react"

export function setupImageLightbox() {
  useEffect(() => {
    const images = document.querySelectorAll(".prose img")

    images.forEach((img) => {
      img.classList.add("cursor-pointer", "transition-transform", "hover:scale-105")
      img.addEventListener("click", () => {
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

        // Close on click outside or close button
        lightbox.addEventListener("click", (e) => {
          if (e.target === lightbox || e.target === closeBtn) {
            document.body.removeChild(lightbox)
          }
        })

        // Close on escape key
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && document.body.contains(lightbox)) {
            document.body.removeChild(lightbox)
          }
        })
      })
    })
  }, [])

  return null
}

export default function ImageLightbox() {
  setupImageLightbox()
  return null
}
