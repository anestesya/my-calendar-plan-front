export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">Sobre o App</h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-emerald max-w-none">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-emerald-600">📚</span>
              </div>
              <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Gerador de Planos de Estudo</h2>
              <p className="text-emerald-600 text-lg">Sua ferramenta inteligente para organizar estudos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">O que fazemos</h3>
                <p className="text-emerald-700">
                  Criamos planos de estudo personalizados baseados em suas necessidades profissionais e tempo
                  disponível. Nossa IA analisa requisitos de vagas e gera cronogramas otimizados.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Como funciona</h3>
                <ol className="text-emerald-700 space-y-2">
                  <li>1. Insira os requisitos da vaga desejada</li>
                  <li>2. Informe seu tempo disponível para estudos</li>
                  <li>3. Receba um plano personalizado</li>
                  <li>4. Exporte para seu Google Calendar</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Recursos Principais</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-emerald-700">Planos personalizados por IA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-emerald-700">Integração com Google Calendar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-emerald-700">Dashboard de acompanhamento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-emerald-700">Download em múltiplos formatos</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Preços Transparentes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">R$ 1,00</div>
                  <div className="text-emerald-700">Geração do Plano</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">R$ 5,00</div>
                  <div className="text-emerald-700">Download/Exportação</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-emerald-600 mb-4">Comece a organizar seus estudos hoje mesmo!</p>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Criar Meu Plano
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
