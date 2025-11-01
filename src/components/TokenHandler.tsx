'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { JWTPayload } from '@/interfaces/User';
import { useAuth } from '@/context/AuthContext';

export default function TokenHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) return;

    try {
      const decoded = jwtDecode<JWTPayload>(token);

      // 🔹 Dejá que el contexto maneje el mapping
      setUser({
        id: decoded.sub,
        name: decoded.name ?? 'Mi perfil',
        email: decoded.email,
        isAdmin: decoded.isAdmin ?? false,
        profilePicture: decoded.profilePicture ?? ''
      });

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(decoded));

      router.replace('/dashboard/user');
    } catch (err) {
      console.error('Error decodificando token de Google:', err);
    }
  }, [searchParams, router, setUser]);

  return null;
}