'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

interface ProtectedRoutesProps {
  children: ReactNode
}

export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { user, token, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {

    if (!loading) {
      if (!token || !user) {
        router.push('/login')
      }
    }
  }, [user, token, loading, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[var(--background)]">
        <p className="text-lg text-orange-500">Cargando...</p>
      </div>
    )
  }

  // Si no hay user o token, no renderiza el contenido (mientras redirige)
  if (!token || !user) return null

  return <>{children}</>
}