"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LogOut, User, BookOpen } from "lucide-react"
import { UserIcon } from "lucide-react"
import Link from "next/link"

interface UserNavProps {
  user: { name: string; email: string; image: string }
  onSignOut: () => void
}

export function UserNav({ user, onSignOut }: UserNavProps) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center gap-2 h-auto p-2"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
          <UserIcon className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </Button>

      {showDropdown && (
        <Card className="absolute right-0 top-full mt-2 w-64 z-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <Link href="/dashboard" className="block">
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Meus Planos
                </Button>
              </Link>
              <Link href="/" className="block">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Criar Plano
                </Button>
              </Link>
            </div>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => {
                setShowDropdown(false)
                onSignOut()
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
