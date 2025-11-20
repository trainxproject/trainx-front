"use client"

import { getAllUsers } from "@/services/userService";
import { getAllTrainers } from "@/services/trainersService";
import { useEffect, useState } from "react";
import { Classes } from "@/interfaces/Classes";
import { Trainers } from "@/interfaces/Trainer";

const AdminStatsCard: React.FC = ()=> {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllUsers()
                setUsers(response)
            } catch (error) {
                console.error("Error al traer los usuarios");
                return null
            }
        }
        fetchData()
    }, [])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getAllTrainers();
            setTrainers(response);
          } catch (error) {
            console.error("Error al traer los entrenadores");
            return null;
          }  
        }
        fetchData()
    }, [])

    const [users, setUsers] = useState<Classes[]>([])
    const [trainers, setTrainers] = useState<Trainers[]>([])

        return (
                <div className="flex flex-wrap gap-8 mt-2">
    
             <div
                    className="bg-(--secondary) border border-white/10 p-6 rounded-xl 
                    w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-[220px]
                    shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                    hover:shadow-[0_6px_25px_rgba(255,255,255,0.1)] 
                    transition-all duration-300"
                >
                    <h3 className="text-gray-100">Total de Socios</h3>

                    <div className="flex items-baseline p-2">
                    <h2 className="font-bold text-3xl text-(--primary)">{users.length}</h2>
                    <p className="ml-2 text-gray-400">activos</p>
                    </div>
                </div>

                <div
                    className="bg-(--secondary) border border-white/10 p-6 rounded-xl 
                    w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-[220px]
                    shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                    hover:shadow-[0_6px_25px_rgba(255,255,255,0.1)] 
                    transition-all duration-300"
                >
                    <h3 className="text-gray-100">Total de Entrenadores</h3>

                    <div className="flex items-baseline p-2">
                    <h2 className="font-bold text-3xl text-(--primary)">{trainers.length}</h2>
                    <p className="ml-2 text-gray-400">activos</p>
                    </div>
                </div>
                </div>





        );
            
}

export default AdminStatsCard;