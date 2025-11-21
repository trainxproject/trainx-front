'use client'

import { FiveDay, ThreeDay, Collection } from "@/interfaces/Plan";
import { getThreeDayPlan, getFiveDayPlan, getMonthlyCollection } from "@/services/adminServices";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/services/userService";
import { getAllTrainers } from "@/services/trainersService";
import { Classes } from "@/interfaces/Classes";
import { Trainers } from "@/interfaces/Trainer";

const Statistics: React.FC =  () => {

    const [threeDay, setThreeDay] = useState<ThreeDay | null>()
    const [fiveDay, setFiveDay] = useState<FiveDay | null>()
    const [MonthlyCollection, setMonthlyCollection] = useState<Collection | null>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const threeDay = await getThreeDayPlan();
                console.log(threeDay);
                setThreeDay(threeDay);
            } catch (error) {
                console.error("Error al traer los planes de tres días: ", error);
                return[]
            }
        }
        fetchData()
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fiveDay = await getFiveDayPlan();
                console.log(fiveDay);
                setFiveDay(fiveDay);
            } catch (error) {
                console.error("Error al traer los planes de cinco días: ", error);
                return[]
            }
        }
        fetchData()
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const recaudacion = await getMonthlyCollection();
                console.log(recaudacion);
                setMonthlyCollection(recaudacion);
            } catch (error) {
                console.error("Error al traer la recaudacion mensual: ", error);
                return[];
            }
        }
        fetchData()
    }, []);


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

    return(
        <div className="flex flex-col">
            <div>
                <h1 className="text-4xl text-[--foreground] font-semibold">
                    Estadisticas generales
                </h1>
                <p className="text-md text-[--foreground] font-light py-4">
                    Visualiza el rendimiento de tu gimnasio
                </p>
            </div>
            <div className="grid grid-cols-3 items-center mt-15">
            <div className="flex flex-col items-center py-4 px-6 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Ingresos mensuales
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">${MonthlyCollection?.totalMonthlyRevenue}</span>
                </div>
                <div className="flex flex-col items-center py-4 px-6 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Planes de tres días
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">{threeDay?.count}</span>
                </div>
                <div className="flex flex-col items-center py-4 px-6 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Planes de cinco días
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">{fiveDay?.count}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 justify-center items gap-10">
                <div className="flex flex-col items-center justify-center w-50 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Socios Totales
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">${users.length}</span>
                </div>
                <div className="flex flex-col items-center justify-center w-50 p-3 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Cantidad de enrtenadores
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">${trainers.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Statistics;