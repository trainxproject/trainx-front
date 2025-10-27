'use client'

import Script from "next/script";

const ChatBot = () => {
    return(
        <div className="flex justify-baseline items-center bg-amber-600 w-4xl h-20">
            <div>
                <h2 className="text-2xl font-semibold">
                    Rutinas personalizadas
                </h2>
                <p className="font-">
                Consulta con nuestro asistente virtual para obtener rutinas adaptadas a tus objetivos
                </p>
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