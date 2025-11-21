'use client'

import { FiveDay, ThreeDay, Collection } from "@/interfaces/Plan";
import { getThreeDayPlan, getFiveDayPlan, getMonthlyCollection } from "@/services/adminServices";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/services/userService";
import { getAllTrainers } from "@/services/trainersService";
import { Trainers } from "@/interfaces/Trainer";
// Asumo que tienes una interfaz IUser, la corregí aquí para evitar el error de Classes[]
import { IUser } from "@/interfaces/User"; 

const Statistics: React.FC = () => {

    const [threeDay, setThreeDay] = useState<ThreeDay | null>(null);
    const [fiveDay, setFiveDay] = useState<FiveDay | null>(null);
    const [monthlyCollection, setMonthlyCollection] = useState<Collection | null>(null);
    const [users, setUsers] = useState<IUser[]>([]); // Corregido el tipo
    const [trainers, setTrainers] = useState<Trainers[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ejecutamos todas las peticiones en paralelo para mayor velocidad
                const [
                    threeDayData,
                    fiveDayData,
                    collectionData,
                    usersData,
                    trainersData
                ] = await Promise.all([
                    getThreeDayPlan(),
                    getFiveDayPlan(),
                    getMonthlyCollection(),
                    getAllUsers(),
                    getAllTrainers()
                ]);

                setThreeDay(threeDayData);
                setFiveDay(fiveDayData);
                setMonthlyCollection(collectionData);
                setUsers(usersData || []);
                setTrainers(trainersData || []);

            } catch (error) {
                console.error("Error al cargar las estadísticas: ", error);
            }
        };
        fetchData();
    }, []);

    // Componente reutilizable para las Cards (hace el código más limpio)
    const StatCard = ({ title, value, isMoney = false }: { title: string, value: string | number | undefined, isMoney?: boolean }) => (
        <div className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm hover:bg-white/10 transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 text-center">
                {title}
            </h3>
            <span className={`mt-2 text-2xl sm:text-3xl font-bold ${isMoney ? 'text-green-400' : 'text-orange-500'}`}>
                {isMoney && "$"}{value ?? 0}
            </span>
        </div>
    );

    return (
        <div className="flex flex-col w-full max-w-7xl mx-auto px-4">
            
            {/* Títulos */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl text-white font-semibold">
                    Estadísticas generales
                </h1>
                <p className="text-md text-gray-400 font-light py-2">
                    Visualiza el rendimiento de tu gimnasio
                </p>
            </div>

            <div className="flex flex-col gap-6">
                
                {/* PRIMERA FILA: 2 CARDS (Socios y Entrenadores) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StatCard 
                        title="Socios Totales" 
                        value={users.length} 
                    />
                    <StatCard 
                        title="Entrenadores Activos" 
                        value={trainers.length} 
                    />
                </div>

                {/* SEGUNDA FILA: 3 CARDS (Dinero y Planes) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard 
                        title="Ingresos Mensuales" 
                        value={monthlyCollection?.totalMonthlyRevenue} 
                        isMoney 
                    />
                    <StatCard 
                        title="Planes de 3 días" 
                        value={threeDay?.count} 
                    />
                    <StatCard 
                        title="Planes de 5 días" 
                        value={fiveDay?.count} 
                    />
                </div>

            </div>
        </div>
    );
}

export default Statistics;