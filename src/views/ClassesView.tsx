import Calendario from "@/components/Calendar"

const ClasesView = () => {
    return(
        <div className="border-[1px] border w-4xl h-auto bg-(--secondary) rounded-2xl mb-8">
            <h2 className="text-(--foreground) text-2xl font-bold">Calendario semanal</h2>
                <div className="flex items-center justify-around bg-(--secondary) h-14 w-auto
                text-(--primary) text-2xl font-medium rounded-2xl">
                    <p className="border-b-[1px] border-slate-500">Lun</p>
                    <p className="border-b-[1px] border-slate-500">Mar</p>
                    <p className="border-b-[1px] border-slate-500">Mié</p>
                    <p className="border-b-[1px] border-slate-500">Jue</p>
                    <p className="border-b-[1px] border-slate-500">Vie</p>
                    <p className="border-b-[1px] border-slate-500">Sab</p>
                    <p className="border-b-[1px] border-slate-500">Dom</p>
                </div>    
        </div>
    )
}

export default ClasesView
