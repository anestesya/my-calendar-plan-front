"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Chrome } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SignIn() {
  const handleGoogleSignIn = () => {
    // Simulate Google OAuth flow
    console.log("[v0] Initiating Google OAuth flow")
    // In a real app, this would redirect to Google OAuth
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="hidden lg:block order-2 lg:order-1">
          <Image
            src="/emerald-study.jpg"
            alt="Ilustração de pessoa estudando com planos organizados"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <Card className="w-full max-w-md mx-auto order-1 lg:order-2">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 bg-primary rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-serif">Bem-vindo ao Gerador de Planos de Estudo</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Faça login com sua conta Google para criar planos personalizados e exportar para o Google Calendar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="lg:hidden mb-6">
              <Image
                src="/placeholder-m66co.png"
                alt="Ilustração de planejamento de estudos"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg max-w-xs mx-auto"
              />
            </div>

            <div className="mb-6 p-3 sm:p-4 bg-muted/50 rounded-lg border">
              <h3 className="font-semibold text-sm mb-2 text-center">💰 Preço Transparente</h3>
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>Plano completo (geração + download + export):</span>
                  <span className="font-medium">R$ 1,00</span>
                </div>
              </div>
              <Link href="/precos" className="text-xs text-primary hover:underline block text-center mt-2">
                Ver detalhes dos preços →
              </Link>
            </div>

            <Button onClick={handleGoogleSignIn} className="w-full" size="lg">
              <Chrome className="mr-2 h-5 w-5" />
              Entrar com Google
            </Button>

            <div className="text-xs text-muted-foreground text-center mt-4 space-y-2">
              <p>Ao continuar, você concorda com nossos termos de uso e política de privacidade</p>
              <div className="flex justify-center gap-4">
                <Link href="/precos" className="text-primary hover:underline">
                  Preços
                </Link>
                <Link href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
