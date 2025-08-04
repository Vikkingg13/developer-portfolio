"use client"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Обо мне</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/developer-at-work-2.png?height=800&width=800" alt="Developer at work" className="rounded-lg shadow-lg" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Разработчик с опытом создания современных веб-приложений и автоматизаций
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Обладаю более чем двухлетним опытом разработки веб-приложений,
              Telegram Mini Apps и чат-ботов для Telegram и WhatsApp.
              Работаю с широким стеком технологий, включая React, Next.js, TypeScript, Python (Django), Java (Spring),
              а также системами автоматизации на n8n.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
            Специализируюсь на разработке надёжных веб-сервисов, интеграции с внешними API и проектировании backend-архитектур.
            Следую современным практикам разработки и постоянно расширяю технические навыки.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Опыт</h4>
                <p className="text-gray-600">2+ года</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Проекты</h4>
                <p className="text-gray-600">7+ завершенных</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Локация</h4>
                <p className="text-gray-600">Гродненская область, Беларусь</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Статус</h4>
                <p className="text-green-600 font-medium">Доступен для работы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
