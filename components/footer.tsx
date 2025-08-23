export default function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
          <a href="/sobre" className="text-emerald-700 hover:text-emerald-800 text-sm transition-colors">
            Sobre o App
          </a>
          <a
            href="/desenvolvedor"
            className="text-emerald-700 hover:text-emerald-800 text-sm transition-colors flex items-center"
          >
            Desenvolvido por Tadeu Luis ❤️
          </a>
        </div>
      </div>
    </footer>
  )
}
