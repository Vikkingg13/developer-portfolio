"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Fullstack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="/developer.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Привет, я <span className="text-blue-600">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Разрабатываю современные веб-приложения, Telegram Mini Apps и ботов, используя Next.js, Python и другие актуальные технологии.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform"
          >
            <Github size={24} className="text-gray-700" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform"
          >
            <Linkedin size={24} className="text-blue-600" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform"
          >
            <Mail size={24} className="text-green-600" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronDown size={24} className="text-gray-600" />
        </button>
      </div>
    </section>
  )
}
