export default function DesenvolvedorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">Sobre o Desenvolvedor</h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-emerald max-w-none">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-emerald-600">👨‍💻</span>
              </div>
              <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Tadeu Luis</h2>
              <p className="text-emerald-600 text-lg">Desenvolvedor Full Stack</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Experiência</h3>
                <p className="text-emerald-700">
                  Desenvolvedor apaixonado por criar soluções inovadoras que facilitam a vida das pessoas. Especializado
                  em aplicações web modernas e inteligência artificial aplicada à educação.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Tecnologias</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm">AI/ML</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Missão</h3>
              <p className="text-emerald-700">
                Acredito que a tecnologia deve ser uma ferramenta para democratizar o acesso ao conhecimento. Este
                gerador de planos de estudo foi criado com o objetivo de ajudar pessoas a organizarem seus estudos de
                forma eficiente e personalizada, tornando o aprendizado mais acessível e estruturado.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-emerald-600 mb-4">Desenvolvido com ❤️ para facilitar seus estudos</p>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Voltar ao App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
