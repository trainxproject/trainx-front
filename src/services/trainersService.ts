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
      return []; // 👈 nunca null
    }
  };

export const selecTrainer = async () => {
  
}