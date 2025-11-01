'use client';

import { useEffect, useState } from "react";
import { getAllTrainers } from "@/services/trainersService";
import { Trainers } from "@/interfaces/Trainer";
import { toast } from "sonner";
import { FaRegStar } from "react-icons/fa";


interface TrainerSelectionProps {
  selectedTrainer?: string | null;
  onSelectTrainer: (trainerId: string) => void;
}

const TrainerSelection = ({ selectedTrainer, onSelectTrainer }: TrainerSelectionProps) => {
  const [trainers, setTrainers] = useState<Trainers[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const data = await getAllTrainers();
        setTrainers(data);
      } catch (error) {
        toast.error("Error al cargar los entrenadores");
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando entrenadores...</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Elige tu Entrenador</h2>
        <p className="text-sm text-gray-500">
          Selecciona un entrenador disponible según tu objetivo
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className={`overflow-hidden rounded-xl border-2 transition-all duration-200 ${
              selectedTrainer === trainer.id
                ? "border-orange-500"
                : "border-gray-300 hover:border-orange-400"
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={trainer.imageUrl}
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
              {selectedTrainer === trainer.id && (
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-orange-500 text-black text-lg font-bold">
                  ✓
                </div>
              )}
              {!trainer.available && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm font-medium">
                  No disponible
                </div>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{trainer.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{trainer.specialization}</p>
              <div className="flex justify-baseline p-2">
                <p><FaRegStar color="orange"/></p>
                <p className="text-sm text-(--foreground) mb-2 pl-2">{trainer.qualification}</p>
              </div>

              {trainer.formation && (
                <p className="text-xs text-gray-400 mb-3 italic">
                  Formación: {trainer.formation}
                </p>
              )}

              <button
                onClick={() => onSelectTrainer(trainer.id)}
                disabled={!trainer.available || selectedTrainer === trainer.id}
                className={`w-full py-2 rounded-md font-semibold transition-colors duration-200 ${
                  !trainer.available
                    ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                    : selectedTrainer === trainer.id
                    ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                    : "bg-orange-500 text-black hover:bg-orange-400"
                }`}
              >
                {selectedTrainer === trainer.id
                  ? "Tu Entrenador"
                  : trainer.available
                  ? "Seleccionar"
                  : "No disponible"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerSelection;
