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
                    Crea, edita y administra las clases del gimnasio
                    </h3>
                </div>
                

                <div className="w-full flex justify-end px-10 mt-6">
                    <button
                    onClick={()=> setModal(true)}
                    className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 transition"
                    >+ Nueva Actividad</button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mt-15">
                { user.map((e) => {
                
                // const requires = e.requiresReservation === "true" || e.requiresReservation === true
                return(
                            
                    <div
                        className="bg-(--secondary) border border-white/10 p-5 rounded-2xl
                                    w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-auto
                                    shadow-[0_4px_20px_rgba(255,255,255,0.05)]
                                    hover:shadow-[0_6px_25px_rgba(255,255,255,0.1)]
                                    transition-all duration-300 flex flex-col items-start gap-3"
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
                className=" bg-orange-500 rounded-2xl shadow-xl p-8 w-11/12 max-w-md relative border-none"
                onClick={(e) => e.stopPropagation()}
                >
            
                <button
                    onClick={() => setModal(false)}
                    className="absolute top-3 right-3 text-black hover:text-gray-600 transition"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold text-black mb-6 text-center">
                    Nueva Actividad
                </h2>

                <form className="flex flex-col gap-5">
              
                    <div>
                    <label className="block text-sm font-medium text-black mb-1">
                        Imagen de la actividad
                    </label>
                    <input
                        type="file"
                        name="imageUrl"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-black mb-1">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ej: Yoga, Crossfit, Zumba..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>

                    
                    <div>
                    <label className="block text-sm font-medium text-black mb-1">
                        Descripción
                    </label>
                    <textarea
                        placeholder="Breve descripción de la actividad"
                        name="description"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                    ></textarea>
                    </div>

                
                    <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="requiresReservation"
                        id="requiresReservation"
                        className="w-5 h-5 accent-blue-600"
                    />
                    <label htmlFor="requiresReservation" className="text-black text-sm">
                        Requiere reservación
                    </label>
                    </div>

                
                    <div>
                    <label className="block text-sm font-medium text-black mb-1">
                        Máximo de capacidad
                    </label>
                    <input
                        type="number"
                        name="maxCapacity"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        min="0"
                        placeholder="Ej: 20"
                    />
                    </div>

                    <button
                    type="submit"
                    className="mt-2 bg-orange text-white font-medium px-4 py-2 rounded-lg hover:bg-black transition active:scale-[0.98]"
                    >
                    Crear Actividad
                </button>
            </form>
        </div>
    </div>
    )}
        </div>
    )
}


export default ActivitiesCard