"use client"

import { useEffect } from "react"

export function SyntaxHighlighter() {
  useEffect(() => {
    // Simple syntax highlighting without external dependencies
    const codeBlocks = document.querySelectorAll("pre code")

    codeBlocks.forEach((codeBlock) => {
      // Add basic styling to code blocks
      codeBlock.parentElement?.classList.add("syntax-highlight")

      // Get the code text
      const text = codeBlock.textContent || ""

      // Simple syntax highlighting for common elements
      const html = text
        // Highlight strings
        .replace(/(["'])(.*?)\1/g, '<span class="syntax-string">$1$2$1</span>')
        // Highlight keywords
        .replace(
          /\b(function|return|if|for|while|else|var|let|const|import|export|from|class|extends|new|this|try|catch|async|await)\b/g,
          '<span class="syntax-keyword">$1</span>',
        )
        // Highlight comments
        .replace(/(\/\/.*)/g, '<span class="syntax-comment">$1</span>')
        // Highlight numbers
        .replace(/\b(\d+)\b/g, '<span class="syntax-number">$1</span>')

      // Set the highlighted HTML
      codeBlock.innerHTML = html
    })
  }, [])

  return null
}
