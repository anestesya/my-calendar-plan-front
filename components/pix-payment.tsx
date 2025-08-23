"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, QrCode, Copy, CheckCircle } from "lucide-react"

type PixPaymentProps = {
  amount: number
  description: string
  onPaymentSuccess: () => void
  onCancel: () => void
}

export function PixPayment({ amount, description, onPaymentSuccess, onCancel }: PixPaymentProps) {
  const [pixCode, setPixCode] = useState("")
  const [isGeneratingPix, setIsGeneratingPix] = useState(true)
  const [isCheckingPayment, setIsCheckingPayment] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Simulate PIX code generation
    const generatePixCode = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock PIX code (in real app, this would come from payment provider)
      const mockPixCode = `00020126580014BR.GOV.BCB.PIX0136${Math.random().toString(36).substring(2, 15)}@email.com5204000053039865802BR5925GERADOR PLANOS ESTUDOS6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 6).toUpperCase()}`

      setPixCode(mockPixCode)
      setIsGeneratingPix(false)
    }

    generatePixCode()
  }, [])

  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar código PIX:", err)
    }
  }

  const checkPayment = async () => {
    setIsCheckingPayment(true)

    // Simulate payment verification (in real app, this would check with payment provider)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock payment success (80% chance for demo)
    const paymentSuccess = Math.random() > 0.2

    if (paymentSuccess) {
      onPaymentSuccess()
    } else {
      alert("Pagamento não encontrado. Tente novamente em alguns instantes.")
    }

    setIsCheckingPayment(false)
  }

  if (isGeneratingPix) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <h2 className="text-xl font-serif font-bold text-center mb-2">Gerando código PIX...</h2>
            <p className="text-muted-foreground text-center">Aguarde um momento</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <QrCode className="h-5 w-5" />
            Pagamento PIX
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">R$ {amount.toFixed(2).replace(".", ",")}</div>
            <p className="text-sm text-muted-foreground">Escaneie o QR Code ou copie o código PIX</p>
          </div>

          {/* Mock QR Code */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
              <QrCode className="h-24 w-24 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium">Código PIX:</div>
            <div className="flex gap-2">
              <div className="flex-1 p-3 bg-muted rounded-md text-xs font-mono break-all">{pixCode}</div>
              <Button variant="outline" size="sm" onClick={copyPixCode} className="shrink-0 bg-transparent">
                {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Button onClick={checkPayment} disabled={isCheckingPayment} className="w-full" size="lg">
              {isCheckingPayment ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verificando pagamento...
                </>
              ) : (
                "Já paguei - Verificar pagamento"
              )}
            </Button>

            <Button variant="outline" onClick={onCancel} className="w-full bg-transparent" disabled={isCheckingPayment}>
              Cancelar
            </Button>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            O pagamento será verificado automaticamente após a confirmação
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
