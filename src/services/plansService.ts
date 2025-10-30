import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getAllPlans = async () => {
    try {
        const response = await axios.get(`${API_URL}/plans`);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error al obtener los planes: ", error);
    }
} 