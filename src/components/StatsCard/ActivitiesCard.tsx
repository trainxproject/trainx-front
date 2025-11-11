import { Users, Activity, Calendar, BarChart3, Search, icons, User, CheckCircle, Clock, XCircle, Check, DollarSign, Ban, Timer, Slash, UserCheck2Icon, UserX2Icon, UserX, UserXIcon, UserX2, UserRoundX, UserRoundXIcon, UserCheck } from "lucide-react";
import { useState } from "react";

const user = [
    {
    name: 'CrossFit',
    description: 'High intensity functional training.',
    requiresReservation: true,
    maxCapacity: 10,
    imageUrl: 'https://res.cloudinary.com/dxpqhpme3/image/upload/v1760749983/crossfit_ufv3qq.jpg',  
    },
    // {
    // name: 'CrossFit',
    // description: 'High intensity functional training.',
    // requiresReservation: true,
    // maxCapacity: 10,
    // imageUrl: 'https://res.cloudinary.com/dxpqhpme3/image/upload/v1760749983/crossfit_ufv3qq.jpg',  
    // }
]

const ActivitiesCard: React.FC = () =>  {
     const [modal, setModal] = useState(false)   
 
     return (

        <div  className="min-h-screen  flex flex-col  bg-(--background) flex flex-wrap  mt-29">
                <div className="mb-3 flex flex-col gap-1 items-center">
                    <h1 className="text-4xl font-semibold text-white tracking-tight leading-tight">
                    Gestión de Actividades
                    </h1>
                     <h3 className="text-lg text-gray-400 ">
                    Crea las actividades para las clases del gimnasio
                    </h3>
                </div>
                

                <div className="w-full flex justify-end px-10 mt-6">
                    <button
                    onClick={()=> setModal(true)}
                    className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 transition"
                    >+ Nueva Actividad</button>
                </div>

                <div 
                className="flex flex-wrap justify-center gap-8 mt-15 ">
                { user.map((e) => {
                
                // const requires = e.requiresReservation === "true" || e.requiresReservation === true
                return(
                            
                    <div
                    
                        className="bg-[hsl(var(--secondary))] 
                                border border-white/10 
                                rounded-2xl p-6 
                                w-full sm:w-[300px] md:w-[350px] lg:w-[380px] 
                                h-auto flex flex-col gap-4 
                                shadow-lg shadow-black/20 
                                hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] 
                                hover:scale-[1.02]
                                transition-all duration-300 ease-out"
                        >

                        <div className="w-full flex justify-center">
                            <img
                            src={e.imageUrl}
                            alt={e.name}
                            className="w-28 h-28 object-cover rounded-xl border border-white/10 shadow-md"
                            />
                        </div>

            
                        <h2 className="text-2xl font-semibold text-(--primary) mt-2 text-center w-full">
                            {e.name}
                        </h2>

        
                        <p className="text-gray-300 text-sm text-center leading-snug w-full">
                            {e.description}
                        </p>

    
                        <div className="flex items-center justify-between w-full mt-2 px-1">
                            <h3 className="text-gray-400 text-sm uppercase tracking-wide">
                            Capacidad
                            </h3>
                            <span className="text-white font-medium">{e.maxCapacity}</span>
                        </div>

                        <div className="flex items-center justify-between w-full text-sm text-gray-400">
                            <span>Requiere reservación</span>
                            
                            <span
            
                            className={
                                
                                
                                `font-medium ${
                                e.requiresReservation ? "text-green-400" : "text-red-400"
                            }`}
                            >
                            {e.requiresReservation ? "Sí" : "No"}
                            </span>
                        </div>
                        </div>
                    )})}
                    </div>

            {modal && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">

                <div
                style={{
                    background: "rgba(70, 70, 70, 1)"
                }}
                className=" rounded-2xl shadow-xl p-8 w-11/12 max-w-md relative border-none"
                onClick={(e) => e.stopPropagation()}
                >
            
                <button
                    onClick={() => setModal(false)}
                    className="absolute top-3 right-3 text-white hover:text-gray-800 transition"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                    Nueva Actividad
                </h2>

                <form className="flex flex-col gap-5">
              
                    <div>
                    <label className="block text-sm font-medium text-white mb-1">
                        Imagen de la actividad
                    </label>
                    <input
                        type="file"
                        name="imageUrl"
                        style={{
                    color: 'black',
                    background: 'rgba(255, 255, 255, 1)',
                    border: '1px solid rgba(255, 253, 253, 1)',
                }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2"
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-white mb-1">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        style={{
                    color: 'black',
                    background: 'rgba(255, 255, 255, 1)',
                    border: '1px solid rgba(255, 253, 253, 1)',
                }}
                        placeholder="Ej: Yoga, Crossfit, Zumba..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2"
                    />
                    </div>

                    
                    <div>
                    <label className="block text-sm font-medium text-white mb-1">
                        Descripción
                    </label>
                    <textarea
                    style={{
                    color: 'black',
                    background: 'rgba(255, 255, 255, 1)',
                    border: '1px solid rgba(255, 253, 253, 1)',
                }}
                        placeholder="Breve descripción de la actividad"
                        name="description"
                        className="w-full border  rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2  min-h-[100px]"
                    ></textarea>
                    </div>

                
                    <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="requiresReservation"
                        id="requiresReservation"
                        
                        className="w-5 h-5 accent-blue-600"
                    />
                    <label htmlFor="requiresReservation" className="text-white text-sm">
                        Requiere reservación
                    </label>
                    </div>

                
                    <div>
                    <label className="block text-sm font-medium text-white mb-1">
                        Máximo de capacidad
                    </label>
                    <input
                        type="number"
                        name="maxCapacity"
                        style={{
                    color: 'black',
                    background: 'rgba(255, 255, 255, 1)',
                    border: '1px solid rgba(255, 253, 253, 1)',
                }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2"
                        min="0"
                        placeholder="Ej: 20"
                    />
                    </div>

                    <button
                    type="submit"
                    className="mt-2 bg-white text-black font-medium px-4 py-2 rounded-lg 
                            hover:bg-gray-300 transition active:scale-[0.98]"
                >Crear Actividad</button>
            </form>
        </div>
    </div>
    )}
        </div>
    )
}


export default ActivitiesCard