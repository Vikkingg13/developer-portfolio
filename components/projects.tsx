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
      title: "E-commerce Platform",
      description: "Полнофункциональная платформа электронной коммерции с корзиной покупок, платежами и админ-панелью.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "web",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Приложение для управления задачами с drag-and-drop функциональностью и командной работой.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Redux", "Firebase", "Material-UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "app",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Интерактивный дашборд погоды с прогнозами, картами и уведомлениями.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "web",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Адаптивный сайт-портфолио с анимациями и современным дизайном.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "web",
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

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    <span>Код</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Демо</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
