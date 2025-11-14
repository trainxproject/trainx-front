'use client'

import { Plan } from "@/interfaces/Plan";
import { getThreeDayPlan, getFiveDayPlan, getMonthlyCollection } from "@/services/adminServices";
import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { useEffect, useState } from "react";

const Statistics: React.FC =  () => {

    const [threeDay, setThreeDay] = useState<Plan[]>([])
    const [fiveDay, setFiveDay] = useState<Plan[]>([])
    const [MonthlyCollection, setMonthlyCollection] = useState<Number>()

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
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fiveDay = await getFiveDayPlan();
                console.log(fiveDay);
                setFiveDay(fiveDay);
            } catch (error) {
                console.error("Error al traer los planes de cinco días: ", fiveDay);
                return[]
            }
        }
        fetchData()
    }, [])

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
    })

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
            <div className="flex justify-around items-center mt-15">
                <div className="flex flex-col items-center py-4 px-6 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Ingresos mensuales
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">$1.623</span>
                </div>
                <div className="flex flex-col items-center py-4 px-6 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Planes de tres días
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">13</span>
                </div>
                <div className="flex flex-col items-center py-4 px-6 rounded-2xl border-2 border-(--border) bg-(--secondary)/45">
                    <h3 className="text-xl font-semibold text-(--foreground) text-(--muted-foreground)">
                        Planes de cinco días
                    </h3>
                    <span className="mt-2 text-lg font-bold text-(--primary)">4</span>
                </div>
            </div>
        </div>
    )
}

export default Statistics;