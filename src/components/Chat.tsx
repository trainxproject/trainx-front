import Script from "next/script"

const Chat = () => {
    return(
        <div>
            <Script
            src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"
            strategy="afterInteractive"
            />
            <Script
            src="https://files.bpcontent.cloud/2025/10/23/02/20251023025900-6FW1NSKH.js"
            strategy="afterInteractive"
            />
        </div>
    )
}

export default Script;