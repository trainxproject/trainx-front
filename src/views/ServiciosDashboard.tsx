'use client'

import {getAllUsers, getFiveDayPlan, getThreeDayPlan, getMonthlyCollection} from "@/services/adminServices";

export const ServiciosDashboard = () => {
    return(
        <div className="grid grid-cols-4 justify-center items-center">
            <div>
                <button className="bg-red-600"
                onClick={() => getAllUsers()}>
                        Usuarios
                </button>
            </div>
            <div>
                <button className="bg-red-600"
                onClick={() => (getFiveDayPlan)}>
                        Planes de cinco días
                </button>
            </div>
            <div>
                <button className="bg-red-600"
                onClick={() => getThreeDayPlan()}>
                        Planes de tres días
                </button>
            </div>
            <div>
                <button className="bg-red-600"
                onClick={() => getMonthlyCollection()}>
                        Recaudación mensual
                </button>
            </div>
        </div>
    )
}