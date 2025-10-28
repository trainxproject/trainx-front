// 'use client'

// import { useState } from "react";
// import CalendarView from "../components/Calendar";
// import Reservas from "@/components/Reservations";
// import ChatBot from "@/components/ChatBot";
// import MapView from "./MapView";
// import SubscriptionsView from "./SubscriptionsView";
// import TrainerSelection from "./TrainerSelectionView";
// import MyBookings from "@/components/Reservations";
// // import MapaLocal from "./MapView";

// export default function DashboardUserView() {
    
//     const [tabSelected, setTabSelected] = useState("class")
//     console.log(tabSelected);

//     return(
//         <div className="min-h-screen flex flex-col items-center bg-(--background)">
//             <div className="flex justify-around my-8 w-[900px] h-12 bg-(--secondary) border-[1px] border-(border) rounded-3xl">
//                 <button onClick={() => setTabSelected("class")}
//                 className={`px-4 my-2 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "class" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
//                     Clases
//                 </button>
//                 <button onClick={() => setTabSelected("reservations")}
//                 className={`px-4 my-2 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "reservations" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
//                     Mis reservas
//                 </button>
//                 <button onClick={() => setTabSelected("subscription")}
//                 className={`px-4 my-2 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "subscription" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
//                     Mi plan
//                 </button>
//                 <button onClick={() => setTabSelected("coach")}
//                 className={`px-4 my-2 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "coach" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
//                     Entrenador
//                 </button>
//                 <button onClick={() => setTabSelected("routines")}
//                 className={`px-4 my-2 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "routines" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
//                     Rutinas
//                 </button>
//                 <button onClick={() => setTabSelected("location")}
//                 className={`px-4 my-2 rounded-2xl hover:bg-(--background) hover:text-white ${tabSelected === "location" ? "bg-(--primary) text-black font-semibold" : "bg-(--secondary) font-semibold"}`}>
//                     Ubicación
//                 </button>
//             </div>
//             <div>
//                 {String(tabSelected) === "class" && <CalendarView />}
//                 {String(tabSelected) === "reservations" && <MyBookings/>}
//                 {String(tabSelected) === "routines" && <ChatBot/>}
//                 {String(tabSelected) === "location" && <MapView/>}
//                 {String(tabSelected) === "subscription" && <SubscriptionsView/>}
//                 {String(tabSelected) === "coach" && <TrainerSelection/>}
//            </div>
//         </div>
//     );
// }

'use client'

import { useState } from "react";
import CalendarView from "../components/Calendar";
import MyBookings from "@/components/Reservations";
import ChatBot from "@/components/ChatBot";
import MapView from "./MapView";
import SubscriptionsView from "./SubscriptionsView";
import TrainerSelection from "./TrainerSelectionView";
import Chat from "../components/Chat";

export default function DashboardUserView() {
    const [tabSelected, setTabSelected] = useState("class");

    return(
        <div className="min-h-screen flex flex-col items-center bg-[var(--background)] px-4 md:px-8 lg:px-16">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-6 w-full max-w-[1200px] bg-[var(--secondary)] border border-[var(--border)] rounded-3xl p-2 md:p-3">
                {[
                    { key: "class", label: "Clases" },
                    { key: "reservations", label: "Mis reservas" },
                    { key: "subscription", label: "Mi plan" },
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
                            hover:bg-[var(--background)] hover:text-white
                            ${tabSelected === tab.key ? "bg-[var(--primary)] text-black" : "bg-[var(--secondary)] text-white"}
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
