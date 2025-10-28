'use client'

import Script from "next/script";
import { getAllClasses } from "@/services/classes";

const ChatBot = () => {
    return(
        <div className="flex justify-baseline w-4xl h-20">
            <div>
                <div className="grid grid-cols-3 w-4xl h-auto">
                    <div className="flex flex-col items-center bg-(--primary)/75 m-5">
                        <h2>Rutina tren inferiror</h2>
                        <div className="flex flex-col justify-start items-center items-center">
                            <p>Sentadilla con barra 4x12</p>
                            <p>Peso muerto rumano 3x12</p>
                            <p>Zancada con mancuerna 3x12</p>
                            <p>Prensa de piernas 3x12</p>
                            <p>Elevación de talones 4x15</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center bg-(--primary)/75 m-5">
                        <h2>Rutina tren superiror</h2>
                        <div className="flex items-center">
                            <p>Press de banca con barra 4x10</p>
                            <p>Remo con barra 3x12</p>
                            <p>Press militar conmancuuernas 3x12</p>
                            <p>Jalon al pecho en polea 3x12</p>
                            <p>Curl de biceps con barra 3x12</p>
                            <p>Fondos en paralelas 3x12</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center bg-(--primary)/75 m-5">
                        <h2>Rutina cuerpo completo</h2>
                        <div className="flex justify-start items-center">
                            <p>Sentadilla con barra 3x12</p>
                            <p>Press de banca 3x10</p>
                            <p>Peso muerto 3x10</p>
                            <p>Dominadas 3x12</p>
                            <p>Press militar con mancuernas 3x10</p>
                            <p>Curl de biceps 3x12</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Script
                    src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"
                    strategy="afterInteractive" />
                    <Script
                    src="https://files.bpcontent.cloud/2025/10/23/02/20251023025900-6FW1NSKH.js"
                    strategy="afterInteractive" />
                </div>
            </div>
        </div>
    )
}

export default ChatBot;