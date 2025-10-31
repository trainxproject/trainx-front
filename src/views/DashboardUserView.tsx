'use client'

import { useState } from "react";
import CalendarView from "../components/Calendar";
import MyBookings from "@/components/Reservations";
import ChatBot from "@/components/ChatBot";
import MapView from "./MapView";
import SubscriptionsView from "./SubscriptionsView";
import TrainerSelection from "./TrainerSelectionView";

export default function DashboardUserView() {
    const [tabSelected, setTabSelected] = useState("class");

    return(
        <div className="min-h-screen flex flex-col items-center bg-(--background) px-4 md:px-8 lg:px-16">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-6 w-full max-w-[1200px] bg-(--secondary) border border->(--border) rounded-3xl p-2 md:p-3">
                {[
                    { key: "class", label: "Clases" },
                    { key: "subscription", label: "Planes" },
                    { key: "coach", label: "Entrenador" },
                    { key: "routines", label: "Rutinas" },
                    { key: "location", label: "Ubicación" },
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
                {String(tabSelected) === "class" && <CalendarView />}
                {String(tabSelected) === "reservations" && <MyBookings />}
                {String(tabSelected) === "routines" && <ChatBot />}
                {String(tabSelected) === "location" && <MapView />}
                {String(tabSelected) === "subscription" && <SubscriptionsView />}
                {String(tabSelected) === "coach" && <TrainerSelection />}
            </div>
        </div>
    );
}
