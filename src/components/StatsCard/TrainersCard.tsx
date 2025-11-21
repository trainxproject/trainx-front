// import { Star, Trash2 } from "lucide-react";
// import { useEffect, useState } from "react";
// import { getAllTrainers } from "@/services/trainersService";
// import { Trainers } from "@/interfaces/Trainer";
// import { createTrainer, deleteActivities,  } from "@/services/adminServices";
// import { deleteTrainer } from "@/services/adminServices";
// import { toast } from "sonner";

// const TrainersCard: React.FC = () =>  {
//     const [modal, setModal] = useState(false);
//     const [iconDelete, setIconDelete] = useState(false);
//     const [trainers, setTrainers] = useState<Trainers[]>([])
//     const [trainerId, setTrainerId] = useState<string>("")

// //+ ESTADOS PARA CREAR EL ENTRENADOR

//     const [name, setName] = useState<string>("");
//     const [specialization, setSpecialization] = useState<string>("");
//     const [formation, setFormation] = useState<string>("");
//     const [imageUrl, setImageUrl] = useState<string>("");
//     const [available, setAvailable] = useState<boolean>(true)

//     const loadTrainers = async () => {
//         try {
//             const trainers = await getAllTrainers();
//             setTrainers(trainers);
//         } catch (error) {
//             console.error("Error al traer los entrenadores: ", error);
//         }
//     }

//     const handlerCreate = async () => {
//         try {
//             const response = await createTrainer(
//                 name,
//                 specialization,
//                 formation,
//                 imageUrl,
//                 available
//             );

//             if(response) {
//                 toast.success("Entrenador creado correctamente");
//                 await loadTrainers();
//                 setModal(false);
//                 return response
//             }

//         } catch (error) {
//             console.error("Error al crear el entrenador", error);
//             return null
//         }
//     }

//     const handlerDelete = async () => {
//         try {
//           const response = await deleteTrainer(trainerId);
//           if (response?.status === 200) {
//             toast.success("Entrenador eliminado");
//             return response;
//           }
      
//         } catch (error: any) {
      
//           const status = error?.response?.status;
//           if (status === 401) {
//             toast.error("No posees los permisos necesarios para realizar esta acción");
//             return null
//           } else if (status === 500) {
//             toast.error("Error interno al eliminar el entrenador");
//             return null
//           }
//           console.error("Error al eliminar el entrenador: ", error);
//           return null
//         }
//       };
      

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const trainers = await getAllTrainers();
//                 console.log(trainers);
//                 setTrainers(trainers);
//             } catch (error) {
//                 console.error("Error al traer los entrenadores: ", error)
//                 return[];
//             }
//         }
//         fetchData()
//     }, [])

//     return (

//         <div  className="min-h-screen  flex flex-col  bg-(--background) flex flex-wrap  mt-29">
//                 <div className="mb-3 flex flex-col gap-1 items-center">
//                     <h1 className="text-4xl font-semibold text-white tracking-tight leading-tight">
//                     Entrenadores para TrainX
//                     </h1>
//                      <h3 className="text-lg text-gray-400 ">
//                     Gestión de entrenadores para los usuarios
//                     </h3>
//                 </div>
                

//                 <div className="w-full flex justify-end px-10 mt-6">
//                     <button
//                     onClick={()=> setModal(true)}
//                     className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 transition"
//                     >+ Agregar Entrenador</button>
//                 </div>

//                 <div className="flex flex-wrap justify-center gap-8 mt-15">
//                  {trainers.map((t) => {
//                         return (
//                             <div
//                             key={t.id}
//                             className="bg-[hsl(var(--secondary))] 
//                                         border border-white/10 
//                                         rounded-2xl p-6 
//                                         w-full sm:w-[300px] md:w-[350px] lg:w-[380px] 
//                                         h-auto flex flex-col gap-4 
//                                         shadow-lg shadow-black/20 
//                                         hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] 
//                                         hover:scale-[1.02]
//                                         transition-all duration-300 ease-out"
//                             >
//                                 <div className="flex items-center">
                       
//                         <button
//                             onClick={()=> {setIconDelete(true), setTrainerId(t.id)}}
//                             aria-label="Eliminar"
//                             title="Eliminar"
//                             className="ml-auto p-2 rounded-md text-gray-400 hover:text-red-500 hover:bg-transparent focus:outline-none transition active:scale-95"
//                         >
//                             <Trash2 size={18} />
//                         </button>
//                         </div>
                         
//                             <div className="w-full flex justify-center">
//                                 <img
//                                 src={t.imageUrl}
//                                 alt={t.name}
//                                 className="w-28 h-28 object-cover rounded-xl border border-white/10 shadow-md"
//                                 />
//                             </div>

                        
//                             <h2 className="text-2xl font-semibold text-(--primary) mt-2 text-center w-full">
//                                 {t.name}
//                             </h2>

                          
//                             <p className="text-gray-300 text-sm text-center leading-snug w-full">
//                                 {t.specialization}
//                             </p>

                            
//                             <div className="flex items-center justify-between w-full mt-2 px-1">
//                                 <h3 className="text-gray-400 text-sm uppercase tracking-wide">
//                                 Formación
//                                 </h3>
//                                 <span className="text-white font-medium">{t.formation}</span>
//                             </div>

                         
//                             <div className="flex items-center justify-between w-full px-1">
//                                 <h3 className="text-gray-400 text-sm uppercase tracking-wide">
//                                 Calificación de usuarios
//                                 </h3>
//                             <div className="flex items-center gap-1">
//                                 <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                                 <span className="text-white font-medium">{t.qualification}</span>
//                             </div>
//                             </div>
//                             </div>
//                         );
//                         })}

//                     </div>

                    
//             {iconDelete && (
//                     <div className="fixed inset-0 bg-gradient-to-b from-black/0 to-black/100 flex items-center justify-center z-50">
//                         <div className="relative bg-(--card) bg-blend-overlay border border-white/10 rounded-2xl p-8 w-11/12 max-w-md shadow-lg animate-fadeIn">
//                         <div className="flex flex-col items-center text-center gap-6">
//                             <h2 className="text-2xl font-semibold text-white">
//                             Eliminar Entrenador
//                             </h2>
//                             <p className="text-(--foreground) text-sm">
//                             Borre las actividades y clases vinculadas al entrenador.
//                             </p>

//                             <div className="flex gap-4 mt-4">
//                             <button
//                                 onClick={() => setIconDelete(false)}
//                                 className="px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition duration-200"
//                             >
//                                 Cancelar
//                             </button>

//                             <button
//                             onClick={()=> {handlerDelete(), setIconDelete(false)}}
//                             className="px-5 py-2 rounded-xl bg-red-600/90 hover:bg-red-700 text-white hover:text-black font-medium transition duration-200"
//                             >
//                             Eliminar
//                             </button>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                 )}

//             {modal && (
//                 <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50 
                  
//                 ">

//                 <div
//                 className="bg-(--secondary) rounded-2xl p-8 w-11/12 max-w-md relative border-none"
//                 onClick={(e) => e.stopPropagation()}
//                 >
            
//                 <button
//                     onClick={() => setModal(false)}
//                     className="absolute top-3 right-3 text-3xl font-semibold text-(--foreground) hover:text-black/70 transition"
//                 >
//                     &times;
//                 </button>

//                 <h2 className="text-2xl font-bold text-(--primary) mb-6 text-center">
//                     Datos del Entrenador
//                 </h2>

             
//                 <form className="flex flex-col gap-5" onSubmit={handlerCreate}>
//                     <div>
//                     <label className="block text-sm font-medium text-(--foreground) mb-1">
//                     Foto
//                     </label>
//                     <input
//                         type="file"
//                         onChange={(e) => setImageUrl(e.target.value)}
//                         name="imageUrl"
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2"
//                     />
//                     </div>
//                 <div>
//                     <label className="block text-sm font-medium text-(--foreground) mb-1">
//                     Nombre
//                     </label>
//                     <input
//                     type="text"
//                     onChange={(e) => setName(e.target.value)}
//                     name="dayOfWeek"
//                     placeholder="nombre del entrenador"
//                     className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 
//                                 text-(--foreground) placeholder-(--foreground) 
//                                 focus:outline-none focus:ring-2 
//                                 transition"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-(--foreground) mb-1">
//                     Formación
//                     </label>
//                     <input
//                     type="text"
//                     onChange={(e) => setFormation(e.target.value)}
//                     name="startTime"
//                     placeholder="Formación del entrenador"
//                     className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 
//                                 text-white placeholder-(--foreground) 
//                                 focus:outline-none focus:ring-2 transition"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-(--foreground) mb-1">
//                     Especialización
//                     </label>
//                     <input
//                     type="text"
//                     onChange={(e) => setSpecialization(e.target.value)}
//                     name="endTime"
//                     placeholder="Especialización del entrenador"
//                     className="w-full bg-(--secondary) border border-red-600 rounded-lg px-3 py-2 
//                                 text-white placeholder-(--foreground) 
//                                 focus:outline-none focus:ring-2 transition"
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="mt-2 bg-(--primary)/80 hover:bg-(--primary) text-black font-medium px-4 py-2 rounded-lg transition active:scale-[0.98]
//                     hover:shadow-xl/65 hover:shadow-black/80"
//                 >
//                     Agregar
//                 </button>
//                 </form>
//         </div>
//     </div>
//     )}
//         </div>
//     )
// }


// export default TrainersCard;


import { Star, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllTrainers } from "@/services/trainersService";
import { Trainers } from "@/interfaces/Trainer";
import { createTrainer } from "@/services/adminServices";
import { deleteTrainer } from "@/services/adminServices";
import { toast } from "sonner";

const TrainersCard: React.FC = () =>  {

    // --- ESTADOS  -----------------------------------------------------

    const [modal, setModal] = useState(false);
    const [iconDelete, setIconDelete] = useState(false);
    const [trainers, setTrainers] = useState<Trainers[]>([]);
    const [trainerId, setTrainerId] = useState<string>("");

    // Crear entrenador
    const [name, setName] = useState<string>("");
    const [specialization, setSpecialization] = useState<string>("");
    const [formation, setFormation] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [available, setAvailable] = useState<boolean>(true);

    // --- RECUPERAR ESTADOS GUARDADOS ---------------------------------

    useEffect(() => {
        const savedModal = localStorage.getItem("trainerModal");
        const savedDelete = localStorage.getItem("trainerDelete");
        const savedTrainerId = localStorage.getItem("trainerId");

        if (savedModal === "true") setModal(true);
        if (savedDelete === "true") setIconDelete(true);
        if (savedTrainerId) setTrainerId(savedTrainerId);
    }, []);

    // --- ACTUALIZAR AL CAMBIAR ---------------------------------------

    const openModal = () => {
        setModal(true);
        localStorage.setItem("trainerModal", "true");
    };

    const closeModal = () => {
        setModal(false);
        localStorage.setItem("trainerModal", "false");
    };

    const openDelete = (id: string) => {
        setIconDelete(true);
        setTrainerId(id);
        localStorage.setItem("trainerDelete", "true");
        localStorage.setItem("trainerId", id);
    };

    const closeDelete = () => {
        setIconDelete(false);
        localStorage.setItem("trainerDelete", "false");
    };

    // --- CARGAR ENTRENADORES ----------------------------------------

    const loadTrainers = async () => {
        try {
            const trainers = await getAllTrainers();
            setTrainers(trainers);
        } catch (error) {
            console.error("Error al traer los entrenadores: ", error);
        }
    };

    useEffect(() => {
        loadTrainers();
    }, []);

    // --- CREAR ENTRENADOR --------------------------------------------

    const handlerCreate = async (e: React.FormEvent) => {
        e.preventDefault(); // evita refresco

        try {
            const response = await createTrainer(
                name,
                specialization,
                formation,
                imageUrl,
                available
            );

            if(response) {
                toast.success("Entrenador creado correctamente");

                await loadTrainers();

                // cerrar modal + reset
                closeModal();
                setName("");
                setSpecialization("");
                setFormation("");
                setImageUrl("");
                return response;
            }

        } catch (error) {
            console.error("Error al crear el entrenador", error);
            return null;
        }
    };

    // --- ELIMINAR ENTRENADOR -----------------------------------------

    const handlerDelete = async () => {
        try {
            const response = await deleteTrainer(trainerId);

            if (response?.status === 200) {
                toast.success("Entrenador eliminado");

                await loadTrainers();
                closeDelete();
                return response;
            }

        } catch (error: any) {

            const status = error?.response?.status;
            if (status === 401) {
                toast.error("No posees los permisos necesarios");
                return null;
            } else if (status === 500) {
                toast.error("Error interno al eliminar");
                return null;
            }

            console.error("Error al eliminar el entrenador: ", error);
            return null;
        }
    };

    // --- RENDER -------------------------------------------------------

    return (

        <div className="min-h-screen flex flex-col bg-(--background) mt-29">

            <div className="mb-3 flex flex-col gap-1 items-center">
                <h1 className="text-4xl font-semibold text-white tracking-tight leading-tight">
                    Entrenadores para TrainX
                </h1>
                <h3 className="text-lg text-gray-400 ">
                    Gestión de entrenadores para los usuarios
                </h3>
            </div>

            <div className="w-full flex justify-end px-10 mt-6">
                <button
                    onClick={openModal}
                    className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 transition"
                >
                    + Agregar Entrenador
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-15">
                {trainers.map((t) => (
                    <div
                        key={t.id}
                        className="bg-[hsl(var(--secondary))] border border-white/10 rounded-2xl p-6
                                   w-full sm:w-[300px] md:w-[350px] lg:w-[380px]
                                   shadow-lg hover:scale-[1.02] transition-all"
                    >

                        <div className="flex items-center">
                            <button
                                onClick={() => openDelete(t.id)}
                                className="ml-auto p-2 rounded-md text-gray-400 hover:text-red-500"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

                        <div className="w-full flex justify-center">
                            <img
                                src={t.imageUrl}
                                alt={t.name}
                                className="w-28 h-28 object-cover rounded-xl border border-white/10"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold text-(--primary) mt-2 text-center">
                            {t.name}
                        </h2>

                        <p className="text-gray-300 text-sm text-center">
                            {t.specialization}
                        </p>

                        <div className="flex items-center justify-between mt-2">
                            <h3 className="text-gray-400 text-sm uppercase">Formación</h3>
                            <span className="text-white font-medium">{t.formation}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-400 text-sm uppercase">Calificación</h3>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-white font-medium">{t.qualification}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* MODAL ELIMINAR */}
            {iconDelete && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-(--card) p-8 rounded-2xl">
                        <div className="flex flex-col items-center gap-6 text-center">

                            <h2 className="text-2xl font-semibold text-white">
                                Eliminar Entrenador
                            </h2>

                            <p className="text-(--foreground) text-sm">
                                Borre las actividades y clases vinculadas al entrenador.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={closeDelete}
                                    className="px-5 py-2 bg-white/10 text-white rounded-xl"
                                >
                                    Cancelar
                                </button>

                                <button
                                    onClick={handlerDelete}
                                    className="px-5 py-2 bg-red-600 text-white rounded-xl"
                                >
                                    Eliminar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* MODAL CREAR */}
            {modal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div
                        className="bg-(--secondary) rounded-2xl p-8 w-11/12 max-w-md relative"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-3xl font-semibold text-(--foreground)"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-bold text-(--primary) mb-6 text-center">
                            Datos del Entrenador
                        </h2>

                        <form className="flex flex-col gap-5" onSubmit={handlerCreate}>
                            <div>
                                <label className="block text-sm text-(--foreground) mb-1">Foto</label>
                                <input
                                    type="file"
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Nombre</label>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Formación</label>
                                <input
                                    type="text"
                                    onChange={(e) => setFormation(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Especialización</label>
                                <input
                                    type="text"
                                    onChange={(e) => setSpecialization(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 bg-(--primary)/80 hover:bg-(--primary) text-black font-medium px-4 py-2 rounded-lg"
                            >
                                Agregar
                            </button>

                        </form>

                    </div>
                </div>
            )}

        </div>
    );
};

export default TrainersCard;
