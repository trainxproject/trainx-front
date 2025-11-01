import axios from "axios"
import { Classes } from "@/interfaces/Classes"
import { AsyncCallbackSet } from "next/dist/server/lib/async-callback-set";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getAllClasses = async (): Promise<Classes[]> => {
    try {
      const { data } = await axios.get(`${API_URL}/activities`)
      console.log(data)
      return data;
    } catch (error) {
      console.error("Error al obtenre las clases: ", error);
      return [];
    }
  };

export const resevedClass = async (scheduleId: string)  => {
  console.log(scheduleId);
  const token = localStorage.getItem("auth:token");
  console.log("token obtenido: ", token)
    if(!token) {
      console.log("Error al obtener el token. Reservar clase")
      return null;
    }
    try {
      console.log("token enviado: ", token)
      const response = await axios.post(`${API_URL}/reservations/${scheduleId}`, 
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(response)
      return response;
    } catch (error) {
      console.error("Error al reservar la clase: ", error);
      throw new Error("error al reservar")
    }
}

export const filter = async (name: string): Promise< Classes[]> => {
    try {
      const response = await axios.get(`${API_URL}/activities/filter`, 
      {params: {name}}
    );
    console.log(response);
    return response.data as Classes[];
    } catch (error) {
      console.error(error);
      throw new Error("error en filter");
    }
}