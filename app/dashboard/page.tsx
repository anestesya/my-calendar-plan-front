"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserNav } from "@/components/user-nav"
import { Loader2, Calendar, BookOpen, Plus, Clock, Target } from "lucide-react"
import Link from "next/link"
// import { PixPayment } from "@/components/pix-payment"

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

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [studyPlans, setStudyPlans] = useState<StudyPlan[]>([])

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

      // Load saved study plans from localStorage
      const savedPlans = localStorage.getItem("studyPlans")
      if (savedPlans) {
        setStudyPlans(JSON.parse(savedPlans))
      } else {
        // Mock some existing plans for demonstration
        const mockPlans: StudyPlan[] = [
          {
            id: "1",
            title: "Plano de Estudos para Desenvolvedor React Sênior",
            duration: "2 semanas",
            createdAt: "2024-01-15",
            jobDescription: "Desenvolvedor React Sênior - 5+ anos de experiência...",
            days: [
              {
                day: 1,
                topic: "Fundamentos Avançados de React",
                description: "Hooks customizados, performance optimization",
                resources: ["React Docs", "Performance Guide", "Custom Hooks Tutorial"],
              },
              {
                day: 2,
                topic: "TypeScript com React",
                description: "Tipagem avançada, generics, utility types",
                resources: ["TypeScript Handbook", "React TypeScript Guide"],
              },
            ],
          },
          {
            id: "2",
            title: "Plano de Estudos para Full Stack Developer",
            duration: "1 semana",
            createdAt: "2024-01-10",
            jobDescription: "Full Stack Developer - Node.js, React, PostgreSQL...",
            days: [
              {
                day: 1,
                topic: "Node.js e Express",
                description: "APIs RESTful, middleware, autenticação",
                resources: ["Node.js Guide", "Express Documentation"],
              },
            ],
          },
        ]
        setStudyPlans(mockPlans)
        localStorage.setItem("studyPlans", JSON.stringify(mockPlans))
      }

      setUser(mockUser)
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleSignOut = () => {
    setUser(null)
    localStorage.removeItem("studyPlans")
    window.location.href = "/auth/signin"
  }

  const exportPlan = () => {
    alert("Plano exportado para o Google Calendar!")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground text-center">Carregando seus planos...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    window.location.href = "/auth/signin"
    return null
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-serif font-bold">Meus Planos de Estudo</h1>
          <UserNav user={user} onSignOut={handleSignOut} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">Dashboard de Planos</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Gerencie todos os seus planos de estudo criados com IA
          </p>
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Criar Novo Plano
            </Button>
          </Link>
        </div>

        {studyPlans.length === 0 ? (
          <Card className="max-w-md mx-auto">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Nenhum plano criado ainda</h3>
              <p className="text-muted-foreground text-center mb-4">
                Comece criando seu primeiro plano de estudos personalizado
              </p>
              <Link href="/">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Primeiro Plano
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {studyPlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg line-clamp-2 flex items-center gap-2">
                    {plan.title}
                    {plan.isCompleted && <div className="h-2 w-2 bg-emerald-600 rounded-full flex-shrink-0" />}
                  </CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {plan.duration}
                    </span>
                    <span>{new Date(plan.createdAt).toLocaleDateString("pt-BR")}</span>
                  </CardDescription>
                  {plan.isCompleted && (
                    <div className="text-xs text-emerald-600 font-medium">
                      Concluído em: {new Date(plan.completedAt!).toLocaleDateString("pt-BR")}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        Vaga:
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">{plan.jobDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        Conteúdo:
                      </h4>
                      <p className="text-sm text-muted-foreground">{plan.days.length} dias de estudo planejados</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => (window.location.href = `/plano/${plan.id}`)}
                      className="flex-1"
                    >
                      <BookOpen className="mr-1 h-3 w-3" />
                      Ver Plano
                    </Button>
                    <Button size="sm" className="flex-1" onClick={() => exportPlan()}>
                      <Calendar className="mr-1 h-3 w-3" />
                      Exportar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
