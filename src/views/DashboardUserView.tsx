'use client'

import { useState } from "react";
import ClasesView from "./ClassesView";
import Reservas from "@/components/Reservations";
import ChatBot from "@/components/ChatBot";
import MapView from "./MapView";
import SubscriptionsView from "./SubscriptionsView";
// import MapaLocal from "./MapView";

export default function DashboardUserView() {
    
    const [tabSelected, setTabSelected] = useState("class")
    console.log(tabSelected);

    return(
        <div className="min-h-screen flex flex-col items-center bg-(--background)">
            <div className="flex justify-around my-8 w-[900px] h-12 bg-(--secondary) border-[1px] border-(border) rounded-3xl">
                <button onClick={() => setTabSelected("class")}
                className={`px-4 my-2 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "class" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
                    Clases
                </button>
                <button onClick={() => setTabSelected("reservations")}
                className={`px-4 my-1 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "reservations" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
                    Mis reservas
                </button>
                <button onClick={() => setTabSelected("subscription")}
                className={`px-4 my-1 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "subscription" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
                    Mi plan
                </button>
                <button onClick={() => setTabSelected("coach")}
                className={`px-4 my-1 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "coach" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
                    Entrenador
                </button>
                <button onClick={() => setTabSelected("routines")}
                className={`px-4 my-1 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "routines" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
                    Rutinas
                </button>
                <button onClick={() => setTabSelected("location")}
                className={`px-4 my-1 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "location" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
                    Ubicación
                </button>
            </div>
            <div>
                {String(tabSelected) === "class" && <ClasesView />}
                {String(tabSelected) === "reservations" && <Reservas/>}
                {String(tabSelected) === "routines" && <ChatBot/>}
                {String(tabSelected) === "location" && <MapView/>}
                {String(tabSelected) === "subscription" && <SubscriptionsView/>}
            </div>
        </div>
    );
}