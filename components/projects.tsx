"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: string
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Платёжный сервис для интернет магазина",
      description: "Платёжный сервис для интернет магазина, который предлагает новой способ оплаты для покупателей и повышает конверсию для бизнеса.",
      image: "/ggwp.png?height=300&width=400",
      technologies: ["Java", "Next.js", "Python", "Telegram API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "web",
    },
    {
      id: 2,
      title: "Telegram бот для поиска научных статей",
      description: "Telegram бот, который ежедневно отправляет пользователю научные статьи на основе его интересов.",
      image: "/research-feed.png?height=300&width=400",
      technologies: ["Java", "Python", "Telegram API", "Ollama"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "app",
    },
    {
      id: 3,
      title: "Сервис заметок",
      description: "Сервис заметок и планирования задач, который помогаем пользователям организовать свою деятельность.",
      image: "/notes.png?height=300&width=400",
      technologies: ["Java", "Spring", "React", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "web",
    },
    {
      id: 4,
      title: "WhatsApp бот для денежный переводов",
      description: "WhatsApp бот для денежный переводов, поддерживает множество платёжных систем.",
      image: "/payGo-project.jpg?height=300&width=400",
      technologies: ["N8n", "JavaScript", "API Integrations"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "app",
    },
  ]

  const categories = [
    { id: "all", label: "Все проекты" },
    { id: "web", label: "Веб-сайты" },
    { id: "app", label: "Приложения" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Мои проекты</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Вот некоторые из проектов, над которыми я работал. Каждый проект представляет уникальные вызовы и решения.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white rounded-lg p-2 shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === category.id ? "bg-blue-600 text-white" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
