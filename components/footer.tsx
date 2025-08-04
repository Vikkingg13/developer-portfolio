"use client"

import { Github, Linkedin, Mail, Heart, MessageCircle, Send } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-4">
              Full-stack разработчик, создающий современные веб-приложения, Telegram Mini-apps, ботов и автоматизации.
            </p>
            <div className="flex space-x-4">
            <a
                href="https://t.me/vikking_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Send size={20} />
              </a>
              <a
                href="https://github.com/Vikkingg13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/viktor-grigoriev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:vikkingg13@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Навыки
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Разработка веб-приложений</li>
              <li>N8n автоматизации</li>
              <li>Telegram Mini apps и боты</li>
              <li>Админ-панели</li>
              <li>Техническое сопровождение</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Portfolio. Сделано с</span>
            <Heart size={16} className="text-red-500" />
            <span>и Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
