'use client'

import Image from 'next/image';
import { useState } from 'react';
import {User} from 'lucide-react'
import  {EditProfileModal}  from '../components/EditProfileModal'; 
import { useAuth } from '@/context/AuthContext';

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState<'reservations' | 'subscription' | 'trainer'>('reservations');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

const tabs = [
    { key: 'reservations', label: 'Mis reservas' },
    { key: 'subscription', label: 'Mi plan' },
    { key: 'trainer', label: 'Entrenador' },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-[var(--background)] px-4 sm:px-6 md:px-8 lg:px-16 py-8">

  <section className="card flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6 p-6 mb-8 w-full max-w-4xl">

    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 w-full sm:w-auto">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[var(--primary)] flex-shrink-0 flex items-center justify-center bg-[var(--secondary)]">
        {user?.profilePicture ? (
          <Image
            src={user.profilePicture}
            alt={user.name || "Usuario"}
            fill
            className="object-cover"
          />
        ) : (
          <User size={48} className="text-[var(--muted-foreground)]" />
        )}
      </div>

      <div className="text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold">{user?.name || 'Usuario'}</h2>
        <p className="text-muted-foreground text-sm sm:text-base">{user?.email}</p>
      </div>
    </div>

    
    <div className="w-full sm:w-auto flex justify-center sm:justify-end">
      <button
        className="btn-primary text-sm w-full sm:w-auto"
        onClick={() => setIsModalOpen(true)}
      >
        Editar perfil
      </button>
    </div>
  </section>


  <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-6 w-full max-w-4xl bg-[var(--secondary)] border border-[var(--border)] rounded-3xl p-2 md:p-3">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key as any)}
        className={`px-4 py-2 rounded-2xl font-semibold transition-colors duration-200
          hover:bg-[var(--background)] hover:text-white
          ${activeTab === tab.key ? 'bg-[var(--primary)] text-black' : 'bg-[var(--secondary)] text-white'}
        `}
      >
        {tab.label}
      </button>
    ))}
  </div>


  <section className="card p-4 sm:p-6 w-full max-w-4xl">
    {activeTab === 'reservations' && (
      <div>
        <h3 className="text-lg sm:text-xl mb-4 font-semibold">Mis Reservas</h3>
        <p className="text-muted">Aún no tenés reservas registradas.</p>
      </div>
    )}

    {activeTab === 'subscription' && (
      <div>
        <h3 className="text-lg sm:text-xl mb-4 font-semibold">Mi Plan</h3>
        <p className="text-muted">No tenés un plan activo.</p>
      </div>
    )}

    {activeTab === 'trainer' && (
      <div>
        <h3 className="text-lg sm:text-xl mb-4 font-semibold">Entrenador Asignado</h3>
        <p className="text-muted">Aún no tenés un entrenador asignado.</p>
      </div>
    )}
  </section>

  {isModalOpen && (
    <EditProfileModal onClose={() => setIsModalOpen(false)} />
  )}
</main>

  );
} 