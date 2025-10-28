import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getAllClasses = async (): Promise<[]> => {
    try {
      const { data } = await axios.get(`${API_URL}/activities`)
      console.log(data)
      return data;
    } catch (error) {
      console.error("Error al obtenre las clases: ", error);
      return [];
    }
  };