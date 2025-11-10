'use client'

import { useState } from "react";
import { UserListView } from "@/components/AllUser";
import { Activities } from "@/components/Activities";
import { Statistics } from "@/components/Statistics";

export default function DashboardAdminView() {
    const [tabSelected, setTabSelected] = useState("users")
    
    return(
        <div className="min-h-screen flex flex-col bg-(--background) px-4 md:px-8 lg:px-16">
            {/* Tabs */}
            <div className="flex flex-wrap justify-around w-lg gap-2 md:gap-4 my-6 bg-(--secondary) border border->(--border) rounded-3xl p-2 md:p-3">
                {[
                    { key: "users", label: "Usuarios" },
                    { key: "activities", label: "Actividades" },
                    { key: "statistics", label: "Estadisticas" }
                ].map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setTabSelected(tab.key)}
                        className={`
                            px-4 py-2 rounded-2xl font-semibold
                            transition-colors duration-200
                            hover:bg-(--background) hover:text-white
                            ${tabSelected === tab.key ? "bg-(--primary) text-black" : "bg-(--secondary) text-white"}
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="w-full max-w-[1600px]">
                {String(tabSelected) === "users" && <UserListView />}
                {String(tabSelected) === "activities" && <Activities />}
                {String(tabSelected) === "statistics" && <Statistics />}
            </div>
        </div>
    );
}