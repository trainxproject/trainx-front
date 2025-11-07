'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

interface ProtectedRoutesProps {
  children: ReactNode
}

export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { user, token, loading } = useAuth()
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!loading) {
      if (!user || !token) {
        router.push('/login')
      } else {
        setChecked(true) // solo pasa a renderizar si todo está listo
      }
    }
  }, [user, token, loading, router])

  if (loading || !checked) {
    return (
      <div className="flex justify-center items-center h-screen bg-[var(--background)]">
        <p className="text-lg text-orange-500">Cargando...</p>
      </div>
    )
  }

  return <>{children}</>
}