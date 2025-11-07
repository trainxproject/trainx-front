'use client'

import { IUser } from "@/interfaces/User";
import { getAllUsers } from "@/services/adminServices";
import { useEffect } from "react";

export const AllUsers = () => {
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data: IUser[] | null = await getAllUsers();
                    console.log(data);
                    return data;
                } catch (error) {
                    console.error("Error al traer los usuarios: ", error);
                    return null;
                }
            };

            fetchData();
            
        }, [])
    return(
        <>
        </>
    )
}