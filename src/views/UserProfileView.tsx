'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {User} from 'lucide-react'
import  {EditProfileModal}  from '../components/EditProfileModal'; 
import { useAuth } from '@/context/AuthContext';
import { getPlanUser, getTrainerUser } from '@/services/userService';
import { Plan } from '@/interfaces/Plan';
import { Trainers } from '@/interfaces/Trainer';
import { getReservationsByUser } from '@/services/classesService';
import { IReservation } from '@/interfaces/Classes';

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState<'reservations' | 'subscription' | 'trainer'>('reservations');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [trainer, setTrainer] = useState<Trainers | null>(null);
  const [loadingTrainer, setLoadingTrainer] = useState(false);
  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [loadingReservations, setLoadingReservations] = useState(false);

  const { user } = useAuth();

const tabs = [
    { key: 'reservations', label: 'Mis reservas' },
    { key: 'subscription', label: 'Mi plan' },
    { key: 'trainer', label: 'Entrenador' },
  ];
 const handleFetchPlan = async () => {
    if (!user?.id) return;
    try {
      setLoadingPlan(true);
      const data = await getPlanUser(user.id);
      setPlan(data || null);
    } catch (err) {
      console.error("Error al traer el plan:", err);
    } finally {
      setLoadingPlan(false);
 }
  
 }
 const handleFetchTrainer = async () => {
    if (!user?.id) return;
    try {
      setLoadingTrainer(true);
      const assignedTrainer = await getTrainerUser(user.id);
      setTrainer(assignedTrainer);
    } catch (err) {
      return;
    } finally {
      setLoadingTrainer(false);
    }
  };

  // --- Fetch Reservations ---
  const handleFetchReservations = async () => {
    if (!user?.id) return;
    try {
      setLoadingReservations(true);
      const data = await getReservationsByUser(user.id);
      setReservations(data);
    } catch (err) {
      setReservations([]);
      console.error("Error al traer reservas:", err);
    } finally {
      setLoadingReservations(false);
    }
  };

  useEffect(() => {
    handleFetchPlan();
    handleFetchTrainer();
    handleFetchReservations();
  }, [user?.id]);

  return (
    <main className="min-h-screen flex flex-col items-center bg-[var(--background)] px-4 sm:px-6 md:px-8 lg:px-16 py-8">

  <section className="card flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6 p-6 mb-8 w-full max-w-4xl">

    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 w-full sm:w-auto">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[var(--primary)] flex-shrink-0 flex items-center justify-center bg-[var(--secondary)]">
        {user?.profilePicture ? (
          <Image
            src={user.profilePicture}
            alt={user.name}
            fill
            className="object-cover"
          />
        ) : (
          <User size={48} className="text-[var(--muted-foreground)]" />
        )}
      </div>

      <div className="text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold">{user?.name}</h2>
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
             {loadingReservations ? (
      <p className="text-muted">Cargando reservas...</p>
    ) : reservations.length > 0 ? (
      <ul className="space-y-2">
          {reservations.map((res) => (
    <li key={res.id} className="border rounded p-3 bg-[var(--secondary)]">
      <div className='flex justify-between'>
      <p><strong>Estado:</strong> {res.status === "active" ? "Activa" : "Cancelada"}</p>
      <button className="bg-red-500 hover:bg-red-600 hover:border-[1px] hover:border-black py-2 px-3 rounded-lg">Cancelar</button>
      </div>
      <p><strong>Fecha de creación:</strong> {new Date(res.createdAt).toLocaleString()}</p>

      <div className="ml-2 mt-2">
        <p><strong>Día:</strong> {res.schedule.dayOfWeek}</p>
        <p><strong>Hora:</strong> {res.schedule.startTime} - {res.schedule.endTime}</p>
        <p><strong>Instructor:</strong> {res.schedule.trainer}</p>
      </div>
    </li>
  ))}
      </ul>
    ) : (
      <p className="text-muted">Aún no tenés reservas registradas.</p>
    )}
  </div>
)}

    {activeTab === 'subscription' && (
      <div>
        <h3 className="text-lg sm:text-xl mb-4 font-semibold">Mi Plan</h3>
        {loadingPlan ? (
              <p className="text-muted">Cargando plan...</p>
            ) : plan ? (
              <div className="space-y-2">
                <p><strong>Nombre:</strong> {plan.name}</p>
                <p><strong>Precio:</strong> ${plan.price}</p>
                <p><strong>Beneficios:</strong> {plan.features} meses</p>
              </div>
            ) : (
              <p className="text-muted">No tenés un plan activo.</p>
            )}
          </div>
        )}

    {activeTab === 'trainer' && (
       <div>
            <h3 className="text-lg sm:text-xl mb-4 font-semibold">Entrenador Asignado</h3>
            {loadingTrainer ? (
              <p className="text-muted">Cargando entrenador...</p>
            ) : trainer ? (
              <div className="space-y-2">
                {trainer.imageUrl && (
                  <img src={trainer.imageUrl} alt={trainer.name} className="w-24 h-24 rounded-full object-cover" />
                )}
                <p><strong>Nombre:</strong> {trainer.name}</p>
                <p><strong>Especialidad:</strong> {trainer.specialization}</p>
              </div>
            ) : (
              <p className="text-muted">Aún no tenés un entrenador asignado.</p>
            )}
          </div>
    )}
  </section>

  {isModalOpen && (
    <EditProfileModal onClose={() => setIsModalOpen(false)} />
  )}
</main>

  )
    };   
  
