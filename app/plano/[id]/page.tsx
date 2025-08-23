"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserNav } from "@/components/user-nav"
import { Loader2, Calendar, BookOpen, Download, ArrowLeft, Clock, Target } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

type StudyPlan = {
  id: string
  title: string
  duration: string
  createdAt: string
  jobDescription: string
  completedAt?: string
  isCompleted?: boolean
  days: Array<{
    day: number
    topic: string
    description: string
    resources: string[]
  }>
}

type User = {
  name: string
  email: string
  image: string
}

export default function PlanDetail() {
  const params = useParams()
  const router = useRouter()
  const planId = params.id as string

  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [exportSuccess, setExportSuccess] = useState(false)

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

      // Load the specific study plan
      const savedPlans = localStorage.getItem("studyPlans")
      if (savedPlans) {
        const plans: StudyPlan[] = JSON.parse(savedPlans)
        const plan = plans.find((p) => p.id === planId)
        if (plan) {
          setStudyPlan(plan)
        } else {
          // Plan not found, redirect to dashboard
          router.push("/dashboard")
          return
        }
      } else {
        router.push("/dashboard")
        return
      }

      setUser(mockUser)
      setIsLoading(false)
    }

    checkAuth()
  }, [planId, router])

  const handleSignOut = () => {
    setUser(null)
    window.location.href = "/auth/signin"
  }

  const downloadPlan = () => {
    if (!studyPlan) return

    const planText = `
${studyPlan.title}
Duração: ${studyPlan.duration}
Criado em: ${new Date(studyPlan.createdAt).toLocaleDateString("pt-BR")}

Descrição da Vaga:
${studyPlan.jobDescription}

Plano de Estudos:
${studyPlan.days
  .map(
    (day) => `
Dia ${day.day}: ${day.topic}
${day.description}

Recursos:
${day.resources.map((resource) => `• ${resource}`).join("\n")}
`,
  )
  .join("\n")}
    `

    const blob = new Blob([planText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${studyPlan.title.replace(/[^a-zA-Z0-9]/g, "_")}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const exportToCalendar = async () => {
    setIsExporting(true)

    // Simulate export process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsExporting(false)
    setExportSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => setExportSuccess(false), 3000)
  }

  const markAsCompleted = () => {
    if (!studyPlan) return

    const updatedPlan = {
      ...studyPlan,
      isCompleted: true,
      completedAt: new Date().toISOString(),
    }

    // Update current plan state
    setStudyPlan(updatedPlan)

    // Update localStorage
    const savedPlans = localStorage.getItem("studyPlans")
    if (savedPlans) {
      const plans: StudyPlan[] = JSON.parse(savedPlans)
      const updatedPlans = plans.map((plan) => (plan.id === planId ? updatedPlan : plan))
      localStorage.setItem("studyPlans", JSON.stringify(updatedPlans))
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground text-center">Carregando plano de estudos...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    window.location.href = "/auth/signin"
    return null
  }

  if (!studyPlan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Plano não encontrado</h3>
            <p className="text-muted-foreground text-center mb-4">
              O plano de estudos que você está procurando não foi encontrado.
            </p>
            <Link href="/dashboard">
              <Button>Voltar ao Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (exportSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-serif font-bold text-center mb-2">Plano exportado com sucesso!</h2>
            <p className="text-muted-foreground text-center mb-6">
              Seu plano foi adicionado ao Google Calendar da conta {user.email}.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setExportSuccess(false)}>Voltar ao Plano</Button>
              <Link href="/dashboard">
                <Button variant="outline">Ver Todos os Planos</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-xl sm:text-2xl font-serif font-bold">Plano de Estudos</h1>
          </div>
          <UserNav user={user} onSignOut={handleSignOut} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">{studyPlan.title}</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground mb-4">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Duração: {studyPlan.duration}
            </span>
            <span>Criado em: {new Date(studyPlan.createdAt).toLocaleDateString("pt-BR")}</span>
            {studyPlan.isCompleted && (
              <span className="flex items-center gap-2 text-emerald-600 font-medium">
                <div className="h-2 w-2 bg-emerald-600 rounded-full" />
                Concluído em: {new Date(studyPlan.completedAt!).toLocaleDateString("pt-BR")}
              </span>
            )}
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Descrição da Vaga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{studyPlan.jobDescription}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 mb-8">
          <h3 className="text-xl sm:text-2xl font-serif font-bold">Cronograma de Estudos</h3>
          {studyPlan.days.map((day) => (
            <Card key={day.day}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {day.day}
                  </div>
                  Dia {day.day}: {day.topic}
                </CardTitle>
                <CardDescription>{day.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Recursos de Estudo:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {day.resources.map((resource, index) => (
                      <li key={index}>{resource}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!studyPlan.isCompleted && (
            <Button
              onClick={markAsCompleted}
              size="lg"
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto"
            >
              <Target className="mr-2 h-4 w-4" />
              Marcar como Concluído
            </Button>
          )}
          <Button onClick={downloadPlan} size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button onClick={exportToCalendar} disabled={isExporting} size="lg" className="w-full sm:w-auto">
            {isExporting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Exportando...
              </>
            ) : (
              <>
                <Calendar className="mr-2 h-4 w-4" />
                Exportar para Google Calendar
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
