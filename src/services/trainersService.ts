import axios from "axios";
import { Trainers } from "@/interfaces/Trainer";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getAllTrainers = async (): Promise<Trainers[]> => {
    try {
      const response = await axios.get<Trainers[]>(`${API_URL}/trainers`);
      console.log("Entrenadores obtenidos:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al obtener los entrenadores:", error);
      return [];
    }
  };

  export const selectTrainer = async (userId: string, trainerId: string) => {
    try {
      // Realiza la solicitud PATCH a la API
      const response = await axios.patch(`${API_URL}/users/${userId}/trainer`, {
        trainerId,  // Pasa el ID del entrenador en el cuerpo de la solicitud
      });
  
      // Devuelve la respuesta de la API
      return response.data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al seleccionar el entrenador:", error);
      throw error;  // Propaga el error al componente que hace la solicitud
    }
  };