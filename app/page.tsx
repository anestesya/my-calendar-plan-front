"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserNav } from "@/components/user-nav"
import { Loader2, BookOpen, Target, Clock } from "lucide-react"
import { PixPayment } from "@/components/pix-payment"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Use NEXT_PUBLIC_BACKEND_API_URL para acessar a URL do backend
const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:3000"

type StudyPlan = {
  title: string
  duration: string
  days: Array<{
    day: number
    topic: string
    description: string
    resources: string[]
  }>
  id: string
  createdAt: string
  jobDescription: string
}

type User = {
  name: string
  email: string
  image: string
}

export default function StudyPlanGenerator() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const [jobDescription, setJobDescription] = useState("")
  const [studyTime, setStudyTime] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null)
  const [showGenerationPayment, setShowGenerationPayment] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      // Simulate checking authentication
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authenticated user
      const mockUser = {
        name: "João Silva",
        email: "joao.silva@gmail.com",
        image: "",
      }

      setUser(mockUser)
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleSignOut = () => {
    setUser(null)
    setJobDescription("")
    setStudyTime("")
    setStudyPlan(null)
    // In a real app, this would clear the session
    window.location.href = "/auth/signin"
  }

  const handleGenerateClick = () => {
    if (!jobDescription.trim() || !studyTime.trim()) return
    setShowGenerationPayment(true)
  }

  const generateStudyPlan = async () => {
    setShowGenerationPayment(false)
    setIsGenerating(true)

    try {
      const response = await fetch(`${BACKEND_API_URL}/api/generate-plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // TODO: Adicionar token de autenticação quando a feature de autenticação estiver implementada
          // 'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({ jobDescription: jobDescription.trim(), studyTime: studyTime.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Falha ao gerar plano de estudo")
      }

      const newPlan: StudyPlan = await response.json()

      // Salvar o plano no localStorage (temporariamente, até o backend gerenciar)
      const existingPlans = JSON.parse(localStorage.getItem("studyPlans") || "[]")
      const updatedPlans = [newPlan, ...existingPlans]
      localStorage.setItem("studyPlans", JSON.stringify(updatedPlans))

      setStudyPlan(newPlan)
      router.push(`/plano/${newPlan.id}`)
    } catch (error: unknown) {
      console.error("Erro ao gerar plano de estudo:", error)
      let errorMessage = "Falha ao gerar plano de estudo."
      if (error instanceof Error) {
        errorMessage = `Erro: ${error.message}`
      } else if (typeof error === 'object' && error !== null && 'error' in error && typeof (error as { error: string }).error === 'string') {
          errorMessage = `Erro: ${(error as { error: string }).error}`
      }
      alert(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground text-center">Verificando autenticação...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    window.location.href = "/auth/signin"
    return null
  }

  if (showGenerationPayment) {
    return (
      <PixPayment
        amount={1.0}
        description="Pagamento para gerar plano de estudos com IA"
        onPaymentSuccess={() => {
          generateStudyPlan()
        }}
        onCancel={() => setShowGenerationPayment(false)}
      />
    )
  }

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <h2 className="text-xl font-serif font-bold text-center mb-2">Gerando seu plano de estudos com IA...</h2>
            <p className="text-muted-foreground text-center">Isso pode levar alguns momentos, por favor, aguarde.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (studyPlan) {
    return null
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-serif font-bold">Gerador de Plano de Estudos</h1>
          <UserNav user={user} onSignOut={handleSignOut} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
            Gerador de Plano de Estudos Inteligente
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Olá, {user.name}! Crie um plano de estudos personalizado com IA para se preparar para sua vaga dos sonhos
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 sm:p-4 mb-6">
            <p className="text-xs sm:text-sm text-emerald-800 mb-2">
              <strong>Preço transparente:</strong> R$ 1,00 para gerar seu plano personalizado
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-xs">
              <Link href="/precos" className="text-emerald-600 hover:text-emerald-700 underline">
                Ver detalhes dos preços
              </Link>
              <Link href="/privacidade" className="text-emerald-600 hover:text-emerald-700 underline">
                Política de privacidade
              </Link>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Criar Plano de Estudos
            </CardTitle>
            <CardDescription>
              Forneça os detalhes da vaga e seu tempo disponível para gerar um plano personalizado
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="job-description">Cole aqui a descrição da vaga de trabalho e requisitos:</Label>
              <Textarea
                id="job-description"
                placeholder="Ex: Desenvolvedor React Sênior - Requisitos: 5+ anos de experiência com React, TypeScript, Node.js..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                A IA usará este texto para entender as habilidades necessárias
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="study-time" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Tempo disponível para estudar:
              </Label>
              <Input
                id="study-time"
                placeholder="Ex: 1 semana, 3 dias, 2 semanas"
                value={studyTime}
                onChange={(e) => setStudyTime(e.target.value)}
              />
            </div>

            <Button
              onClick={handleGenerateClick}
              className="w-full"
              size="lg"
              disabled={!jobDescription.trim() || !studyTime.trim()}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Gerar Plano de Estudo (R$ 1,00)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
