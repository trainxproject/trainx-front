'use client';
import { useState } from "react";
import { ArrowRight, CheckCircle, Clock, Users, Trophy, Zap, Calendar } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import {LoginForm} from "../components/LoginForm"; 

interface HomePageProps {
  userPlan?: '3-days' | '5-days' | null;
}

const benefits = [
  { icon: Clock, title: "Horarios Flexibles", description: "Clases desde las 6:00 AM hasta las 10:00 PM todos los días" },
  { icon: Users, title: "Entrenadores Certificados", description: "Personal altamente capacitado y especializado" },
  { icon: Trophy, title: "Resultados Garantizados", description: "Planes personalizados según tus objetivos" },
  { icon: Zap, title: "Instalaciones Modernas", description: "Equipamiento de última generación" },
];

const quickStats = [
  { label: "Socios Activos", value: "245+" },
  { label: "Clases Semanales", value: "80+" },
  { label: "Entrenadores", value: "12" },
  { label: "Años de Experiencia", value: "15" },
];

export default function HomeView({ userPlan }: HomePageProps) {
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleOpenLogin = () => {
    setShowLoginDialog(true);
    toast.info("Inicia sesión", { description: "Debes iniciar sesión para acceder a esta función" });
  };

  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Gimnasio TrainX"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/60" />
        </div>

        <div className="relative px-12 py-20 md:py-28 max-w-2xl">
          <h1 className="text-[48px] md:text-[64px] font-bold mb-6 leading-tight">
            Transforma tu <span className="text-[#FF6B00]">Vida</span>
          </h1>
          <p className="text-[18px] text-gray-500 mb-8 leading-relaxed">
            Únete a TrainX y descubre un nuevo estilo de vida. Reserva tus clases, sigue tu progreso y alcanza tus metas fitness con nuestros entrenadores expertos.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleOpenLogin}
              className="px-6 py-3 bg-[#FF6B00] text-[#121212] font-semibold rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors"
            >
              {userPlan ? "Reservar Clase" : "Comenzar Ahora"}
              {userPlan ? <Calendar className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl text-center shadow-md">
            <p className="text-[32px] font-bold mb-1" style={{ color: '#FF6B00' }}>{stat.value}</p>
            <p className="text-[13px] text-gray-500">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-[36px] font-bold mb-3">¿Por qué elegir <span className="text-[#FF6B00]">TrainX</span>?</h2>
          <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
            Ofrecemos una experiencia única de entrenamiento con todo lo que necesitas para alcanzar tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl text-center shadow-md hover:border-[#FF6B00] transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FF6B0020' }}>
                  <Icon className="w-6 h-6" style={{ color: '#FF6B00' }} />
                </div>
                <h3 className="text-[16px] font-semibold mb-2">{benefit.title}</h3>
                <p className="text-[14px] text-gray-500">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      {!userPlan && (
        <section>
          <div className="p-12 text-center border-2 rounded-xl" style={{ borderColor: '#FF6B00', backgroundColor: '#FF6B0010' }}>
            <h2 className="text-[32px] font-bold mb-4">¿Listo para empezar?</h2>
            <p className="text-[16px] text-gray-500 mb-8 max-w-2xl mx-auto">
              Únete a TrainX hoy mismo y comienza tu transformación. Nuestros expertos te guiarán en cada paso del camino.
            </p>
            <button
              onClick={handleOpenLogin}
              className="px-6 py-3 bg-[#FF6B00] text-[#121212] font-semibold rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors"
            >
              Comenzar Mi Transformación
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}

      {/* Modal de Login */}
      <LoginForm
        open={showLoginDialog}
        onOpenChange={setShowLoginDialog}
        onLogin={(role, email) => {
          setShowLoginDialog(false);
          toast.success(`¡Bienvenido!`, { description: `Has iniciado sesión como ${email}` });
        }}
      />
    </div>
  );
}