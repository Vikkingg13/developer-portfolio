"use client"

import { useState, useEffect } from "react"

interface Skill {
  name: string
  level: number
  category: string
}

export default function Skills() {
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({})

  const skills: Skill[] = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Express.js", level: 70, category: "Backend" },
    { name: "MongoDB", level: 65, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Webpack", level: 70, category: "Tools" },
    { name: "Jest", level: 75, category: "Tools" },
    { name: "Figma", level: 60, category: "Design" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const levels: { [key: string]: number } = {}
      skills.forEach((skill) => {
        levels[skill.name] = skill.level
      })
      setAnimatedLevels(levels)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const categories = ["Frontend", "Backend", "Tools", "Design"]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Навыки и технологии</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Технологии и инструменты, с которыми я работаю для создания качественных веб-приложений.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${animatedLevels[skill.name] || 0}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Дополнительные навыки</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "REST API",
              "GraphQL",
              "Redux",
              "Context API",
              "Styled Components",
              "Material-UI",
              "Framer Motion",
              "PWA",
              "Performance Optimization",
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
