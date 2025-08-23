import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
          <h1 className="text-4xl font-serif font-bold mb-4">Preços Transparentes</h1>
          <p className="text-lg text-muted-foreground">
            Investimento acessível para acelerar sua carreira profissional
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Card className="border-2 border-emerald-200">
            <CardHeader className="text-center">
              <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl font-serif">Plano Completo</CardTitle>
              <CardDescription>Crie e acesse seu plano de estudos personalizado</CardDescription>
              <div className="text-4xl font-bold text-emerald-600 mt-4">R$ 1,00</div>
              <p className="text-sm text-muted-foreground">Pagamento único</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Análise IA da descrição da vaga</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Plano personalizado por tempo disponível</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Cronograma detalhado de estudos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Recursos de aprendizado recomendados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Acesso permanente no dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Download em formato texto</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Exportação para Google Calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Downloads e exportações ilimitados</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-emerald-50 border-emerald-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-center">Por que apenas R$ 1,00?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="h-8 w-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                  IA
                </div>
                <p className="font-semibold mb-1">Tecnologia Avançada</p>
                <p className="text-muted-foreground">Processamento de IA para análise personalizada</p>
              </div>
              <div className="text-center">
                <div className="h-8 w-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                  ⚡
                </div>
                <p className="font-semibold mb-1">Economia de Tempo</p>
                <p className="text-muted-foreground">Horas de pesquisa transformadas em minutos</p>
              </div>
              <div className="text-center">
                <div className="h-8 w-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                  🎯
                </div>
                <p className="font-semibold mb-1">Acesso Completo</p>
                <p className="text-muted-foreground">Todas as funcionalidades incluídas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link href="/auth/signin">
            <Button size="lg" className="px-8">
              Começar Agora
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Pagamento seguro via PIX • Sem mensalidades • Sem compromisso
          </p>
        </div>
      </div>
    </div>
  )
}
