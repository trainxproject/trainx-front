import Calendario from "@/components/Calendar"

const ClasesView = () => {
    return(
        <div className="border-2 border w-4xl h-10 bg-(--secondary)">
            <h2 className="text-(--foreground) text-2xl font-bold">Calendario semanal</h2>
                <div className="flex items-center justify-around bg-(--secondary) h-14 w-auto
                text-(--primary) text-2xl font-medium">
                    <p>Lun</p>
                    <p>Mar</p>
                    <p>Mié</p>
                    <p>Jue</p>
                    <p>Vie</p>
                    <p>Sab</p>
                    <p>Dom</p>
                </div>    
        </div>
    )
}

export default ClasesView
