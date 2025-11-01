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
    <main className="min-h-screen flex flex-col items-center bg-[var(--background)] px-4 md:px-8 lg:px-16 py-8">
    
      <section className="card flex items-center justify-between p-6 mb-8 w-full max-w-4xl">
        <div className="flex items-center gap-6">
          
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[var(--primary)] flex-shrink-0 flex items-center justify-center bg-[var(--secondary)]">
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

    
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold">{user?.name || 'Usuario'}</h2>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>
        </div>

      
        <button
          className="btn-primary text-sm"
          onClick={() => setIsModalOpen(true)}
        >
          Editar perfil
        </button>
      </section>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-6 w-full max-w-4xl bg-[var(--secondary)] border border-[var(--border)] rounded-3xl p-2 md:p-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`
              px-4 py-2 rounded-2xl font-semibold transition-colors duration-200
              hover:bg-[var(--background)] hover:text-white
              ${activeTab === tab.key ? 'bg-[var(--primary)] text-black' : 'bg-[var(--secondary)] text-white'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className="card p-6 w-full max-w-4xl">
        {activeTab === 'reservations' && (
          <div>
            <h3 className="text-xl mb-4">Mis Reservas</h3>
            {/* {user?.reservations?.length ? (
              <ul className="space-y-2">
                {user.reservations.map((r: any) => (
                  <li key={r.id} className="flex justify-between border-b border-[var(--border)] py-1">
                    <span>{r.schedule?.name || 'Clase'}</span>
                    <span className="text-muted">{r.status}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted">Aún no tenés reservas registradas.</p>
            )} */}
          </div>
        )}

        {activeTab === 'subscription' && (
          <div>
            <h3 className="text-xl mb-4">Mi Plan</h3>
            {/* {user?.subscription ? (
              <div className="space-y-1">
                <p><strong>Tipo:</strong> {user.subscription.type}</p>
                <p><strong>Inicio:</strong> {new Date(user.subscription.startDate).toLocaleDateString()}</p>
                <p><strong>Fin:</strong> {new Date(user.subscription.endDate).toLocaleDateString()}</p>
                <p><strong>Estado:</strong> {user.subscription.isActive ? 'Activo' : 'Inactivo'}</p>
              </div>
            ) : (
              <p className="text-muted">No tenés un plan activo.</p>
            )} */}
          </div>
        )}

        {activeTab === 'trainer' && (
          <div>
            <h3 className="text-xl mb-4">Entrenador Asignado</h3>
            {/* {user?.trainer ? (
              <div className="space-y-1">
                <p><strong>Nombre:</strong> {user.trainer.name}</p>
                <p><strong>Email:</strong> {user.trainer.email}</p>
              </div>
            ) : (
              <p className="text-muted">Aún no tenés un entrenador asignado.</p>
            )} */}
          </div>
        )}
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <EditProfileModal  onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
} 