"use client"
import AdminStatsCard from "@/components/StatsCard/AdminStatsCard"
import UserStatsCard from "@/components/StatsCard/UserStatsCard"
import { useState } from "react"
import { Users, Activity, Calendar, BarChart3, Search, icons, Icon, User, Dumbbell } from "lucide-react";
import ActivitiesCard from "@/components/StatsCard/ActivitiesCard";
import ScheduleCards from "@/components/StatsCard/ScheduleCard";
import Statistics from "@/components/StatsCard/Statistics";
import StatisticsCard from "@/components/StatsCard/Statistics";
import TrainersCard from "@/components/StatsCard/TrainersCard";


export default function DashboardAdminView() {
    
    const [tabSelect, setTabSelected] = useState("class")    
    
    
    return (
            <div  className="min-h-screen flex flex-col items-center bg-(--background)">
                <div className="flex justify-end mt-4">

                <AdminStatsCard />
                </div>
            
            <div className="fixed top-30 left-10 right-0">
                
                    
                    <div className="flex flex-col divide-y divide-[hsl(var(--primary))]  max-w-[220px] bg-[hsl(var(--secondary))] border border-gray-400/30 rounded-3xl overflow-hidden">
                        {[
                     
                        { key: "users", label: "Usuarios", icon: <Users className="w-5 h-5 " /> },
                        { key: "activities", label: "Actividades", icon: <Activity className="w-5 h-5" /> },
                        { key: "schedule", label: "Clases", icon: <Calendar className="w-5 h-5" /> },
                        { key: "trainer", label: "Entrenadores", icon: <Dumbbell className="w-5 h-5" /> },
                        { key: "statistics", label: "Estadísticas", icon: <BarChart3 className="w-5 h-5" /> },

                        ].map((key)=>(

                             <button
                                key={key.key}
                                className={`flex items-center gap-2 px-12 py-2 rounded-2xl font-semibold transition-colors duration-200
                                hover:brightness-110 hover:text-white hover:shadow-md hover:scale-102
                                ${tabSelect === key.key
                                    ? "bg-(--primary) text-black"
                                    : "bg-[hsl(var(--secondary))] text-white"
                                }`}
                                onClick={() => setTabSelected(key.key)}
                            >
                                {key.icon}
                                <span>{key.label}</span>    
                            </button>
                        ))}
                         
                        
                    </div>
                    </div>
                    <div className="w-full max-w-[1600px]">
                        {String(tabSelect) === "users" && <UserStatsCard/>}
                        {String(tabSelect) === "activities" && <ActivitiesCard/>}
                        {String(tabSelect) === "schedule" && <ScheduleCards/>}
                        {String(tabSelect) === "trainer" && <TrainersCard/>}
                        {String(tabSelect) === "statistics" && <StatisticsCard/>}
                    </div>
                    </div>
        )
}