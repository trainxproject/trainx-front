'use client';

import { useEffect, useState } from "react";
import { getAllTrainers, selectTrainer } from "@/services/trainersService";
import { Trainers } from "@/interfaces/Trainer";
import { toast } from "sonner";
import { FaRegStar } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

interface TrainerSelectionProps {
  selectedTrainer?: string | null;      // 👈 ahora sí se usa correctamente
  onTrainerAssigned: (trainerId: string) => void;
}

const TrainerSelection = ({ selectedTrainer, onTrainerAssigned }: TrainerSelectionProps) => {
  const [trainers, setTrainers] = useState<Trainers[]>([]);
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [assigning, setAssigning] = useState(false);
  const [assigningTrainer, setAssigningTrainer] = useState<string | null>(null);

  const { user } = useAuth();
  const userId = user?.id;

  // 👇 SINCRONIZA EL VALOR PROVENIENTE DEL PADRE
  useEffect(() => {
    setSelectedTrainerId(selectedTrainer ?? null);
  }, [selectedTrainer]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const data = await getAllTrainers() ?? [];
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

  const handleSelectTrainer = async (trainerId: string) => {
    if (!userId) {
      toast.error("Error: el usuario no está cargado todavía.");
      return;
    }

    setAssigning(true);
    setAssigningTrainer(trainerId);

    try {
      await selectTrainer(userId, trainerId);

      onTrainerAssigned(trainerId);         // avisa al padre
      setSelectedTrainerId(trainerId);      // actualiza el hijo

      toast.success("Entrenador asignado correctamente");
    } catch (error: any) {
      if (error?.response?.status === 403) {
        toast.error("Tu plan no permite asignar un entrenador.");
        return;
      }
      toast.error("Error inesperado al asignar el entrenador");
    } finally {
      setAssigning(false);
      setAssigningTrainer(null);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {trainers.map((trainer) => {
        let buttonText = "Seleccionar";

        if (assigningTrainer === trainer.id) {
          buttonText = "Asignando...";
        } else if (selectedTrainerId === trainer.id) {
          buttonText = "Tu Entrenador";
        }

        return (
          <div
            key={trainer.id}
            className={`overflow-hidden rounded-xl border-2 transition-all duration-200 ${
              selectedTrainerId === trainer.id
                ? "border-orange-500"
                : "border-gray-300 hover:border-orange-400"
            }`}
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl">
              <img
                src={trainer.imageUrl}
                alt={trainer.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {selectedTrainerId === trainer.id && (
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
                <FaRegStar color="orange" />
                <p className="text-sm text-(--foreground) mb-2 pl-2">
                  {trainer.qualification}
                </p>
              </div>

              {trainer.formation && (
                <p className="text-xs text-gray-400 mb-3 italic">
                  Formación: {trainer.formation}
                </p>
              )}

              <button
                disabled={
                  !trainer.available ||
                  assigningTrainer === trainer.id ||
                  selectedTrainerId === trainer.id
                }
                onClick={() => handleSelectTrainer(trainer.id)}
                className={`w-full py-2 rounded-md font-semibold transition-colors duration-200 ${
                  !trainer.available
                    ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                    : selectedTrainerId === trainer.id
                    ? "bg-gray-800 text-orange-500 cursor-not-allowed"
                    : "bg-orange-500 text-black hover:bg-orange-400"
                }`}
              >
                {buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainerSelection;
