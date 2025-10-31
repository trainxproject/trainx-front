import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getAllTrainers = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/trainers`);
        console.log("Entrenadores: ", data);
        return data;
    } catch (error) {
        console.error("Error al traer los entrenadores: ", error);
    }
}

export const selecTrainer = async () => {
    
}