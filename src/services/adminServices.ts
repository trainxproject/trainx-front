import axios from "axios";
import { IUser } from "@/interfaces/User";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllUsers = async (): Promise <IUser[] | null> => {
    console.log("servicio de usuarios")
    try {
        const {data} = await axios.get(`${API_URL}/users`);
            console.log(data);
            return(data);
    } catch (error) {
        console.log("Error al traer los usuario: ", error);
        return null;
    }
}

export const createActivities = async (name: string, description: string, requiresReservation: boolean, maxCapacity: number, imageUrl: string) => {
    try {
        const response = await axios.post(`${API_URL}/activities`, 
        {
            name: name,
            description: description,
            requiresReservation: requiresReservation,
            maxCapacity: maxCapacity,
            imageUrl: imageUrl
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error al crear la activivdad: ", error);
        return null;
    }
}

export const getMonthlyCollection = async () => {
    console.log("recaudacion mensual")
    const token = localStorage.getItem('token');
    console.log(token)

    if(!token) {
        console.log("No se pudo encontrar el token");
        return null;
    }

    try {
        const response = await axios.get(`${API_URL}/admin/statistics/monthly-revenue`,
        {headers: {
            Authorization: `Bearer ${token}`
        }},
        )
        console.log(response);
        return response
    } catch (error) {
        console.error("Error al obtener los ingresos mensuales: ", error);
        return null;
    }
}

export const getThreeDayPlan = async () => {
    const token = localStorage.getItem('token');
    console.log(token);

    if(!token) {
        console.log("No se pudo encontrar el token");
        return null;
    }

    try {
        const response = await axios.get(`${API_URL}/admin/statistics/plans/week-3`,
            {headers: {
                Authorization: `Bearer: ${token}`
            }},
        );
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error al traer los planes de tres días");
        return null;
    }
}

export const getFiveDayPlan = async () => {
    const token = localStorage.getItem('token');
    console.log(token);

    if(!token) {
        console.log("No se pudo encontrar el token");
        return null;
    }

    try {
        const response = await axios.get(`${API_URL}/admin/statistics/plans/week-5`,

            {headers: {
                Authorization: `Bearer: ${token}`
            }},
        );
        console.log(response);
        return(response)
    } catch (error) {
        console.error("Error al traer los planes de cinco días: ", error);
        return null;
    }
}

export const deleteActivities = async (activityId: string) => {
    const token = localStorage.getItem('token');
    console.log(token);

    if(!token) {
        console.error("No se a podido encontrar el token");
        return null;
    }

    try {
        const deleteActivity = await axios.delete(`${API_URL}/activities/${activityId}`);
        console.log(deleteActivities);
        return deleteActivity
    } catch (error) {
        console.error("Error al eliminar la actividad: ", error);
        return null
    }
}