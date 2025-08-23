import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, Trash2 } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
          <h1 className="text-4xl font-serif font-bold mb-4">Política de Privacidade</h1>
          <p className="text-lg text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                Compromisso com sua Privacidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                O Gerador de Plano de Estudos IA está comprometido em proteger sua privacidade e dados pessoais. Esta
                política explica como coletamos, usamos e protegemos suas informações.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-emerald-600" />
                Informações que Coletamos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dados de Autenticação (Google)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Foto do perfil (se disponível)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dados de Uso</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Descrições de vagas inseridas</li>
                  <li>Planos de estudo gerados</li>
                  <li>Tempo de estudo especificado</li>
                  <li>Histórico de pagamentos via PIX</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-emerald-600" />
                Como Usamos suas Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Geração de Planos Personalizados</p>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos as descrições de vagas para criar planos de estudo específicos através de IA
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Autenticação e Segurança</p>
                    <p className="text-sm text-muted-foreground">
                      Dados do Google são usados apenas para autenticação e personalização da experiência
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Processamento de Pagamentos</p>
                    <p className="text-sm text-muted-foreground">
                      Informações de pagamento são processadas de forma segura via PIX
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proteção de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold mb-2">🔒 Criptografia</h4>
                  <p className="text-sm text-muted-foreground">
                    Todos os dados são transmitidos e armazenados com criptografia de ponta
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold mb-2">🛡️ Acesso Restrito</h4>
                  <p className="text-sm text-muted-foreground">
                    Apenas você tem acesso aos seus planos de estudo e dados pessoais
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold mb-2">🔄 Backup Seguro</h4>
                  <p className="text-sm text-muted-foreground">Backups regulares com proteção contra perda de dados</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold mb-2">⚡ Processamento Local</h4>
                  <p className="text-sm text-muted-foreground">
                    Dados sensíveis processados localmente sempre que possível
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-emerald-600" />
                Seus Direitos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Você tem direito a:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm">Acessar todos os seus dados pessoais</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm">Solicitar correção de informações incorretas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm">Excluir sua conta e todos os dados associados</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm">Exportar seus dados em formato legível</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm">Revogar consentimento a qualquer momento</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compartilhamento de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Não compartilhamos, vendemos ou alugamos seus dados pessoais com terceiros.</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Seus dados são utilizados exclusivamente para fornecer o serviço de geração de planos de estudo.
                Integrações com Google Calendar são realizadas diretamente através de APIs oficiais com sua autorização
                explícita.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Para dúvidas sobre esta política de privacidade ou exercer seus direitos, entre em contato:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>E-mail:</strong> privacidade@planodeestudos.ai
                </p>
                <p>
                  <strong>Resposta:</strong> Até 48 horas úteis
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link href="/">
            <Button variant="outline">Voltar ao Início</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
