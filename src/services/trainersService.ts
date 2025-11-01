import axios from "axios";
import { Trainers } from "@/interfaces/Trainer";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getAllTrainers = async (): Promise<Trainers[] | null> => {
    try {
        const { data } = await axios.get(`${API_URL}/trainers`);
        console.log("Entrenadores: ", data);
        return data;
    } catch (error) {
        console.error("Error al traer los entrenadores: ", error);
        return null
    }
}

export const selecTrainer = async () => {

}