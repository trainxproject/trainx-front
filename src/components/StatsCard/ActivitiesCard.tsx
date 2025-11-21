'use client'

import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getAllClasses } from "@/services/classesService";
import { Classes } from "@/interfaces/Classes";
import { createActivities, deleteActivities } from "@/services/adminServices";
import { uploadCloudinaryService } from "@/services/uploadCloudinaryService";
import { toast } from "sonner";
import { date } from "yup";
import { timeEnd } from "console";

const ActivitiesCard: React.FC = () => {
    const [modal, setModal] = useState(false);
    const [iconDelete, setIconDelete] = useState(false);
    const [activities, setActivities] = useState<Classes[] | null>([]);
    const [activityId, setActivityId] = useState("");

    // Estados del formulario
    const [name, setName] = useState("");
    const [description, setDescrition] = useState("");
    const [requiresReservation, setRequieresReservation] = useState(false);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [file, setFile] = useState<File | null>(null);

    const fetchData = async () => {
        try {
            const data = await getAllClasses();
            setActivities(data);
        } catch (error) {
            console.error("Error al traer actividades:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlerCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let uploadedImageUrl = "";

            if (file) {
                const token = localStorage.getItem("token") || "";
                uploadedImageUrl = await uploadCloudinaryService(file, token);
            }

            const response = await createActivities(
                name,
                description,
                requiresReservation,
                maxCapacity,
                uploadedImageUrl
            );

            if (response) {
                toast.success("Actividad creada correctamente");
                await fetchData();
                setModal(false);

                // Limpiar formulario
                setName("");
                setDescrition("");
                setRequieresReservation(false);
                setMaxCapacity(0);
                setFile(null);
            }

            return response;
        } catch (error) {
            console.error("Error al crear la clase:", error);
            toast.error("Error al crear la clase");
            return null;
        }
    };

    const handlerDelete = async (id: string) => {
        try {
            const response = await deleteActivities(id);
            await fetchData();
            return response;
        } catch (error) {
            console.error("Error al eliminar la actividad:", error);
            return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-(--background) mt-29">

            {/* HEADER */}
            <div className="mb-3 flex flex-col gap-1 items-center">
                <h1 className="text-4xl font-semibold text-white">Gestión de Actividades</h1>
                <h3 className="text-lg text-gray-400">
                    Crea las actividades para las clases del gimnasio
                </h3>
            </div>

            {/* BOTÓN NUEVA ACTIVIDAD */}
            <div className="w-full flex justify-end px-10 mt-6">
                <button
                    onClick={() => setModal(true)}
                    className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 transition"
                >
                    + Nueva Actividad
                </button>
            </div>

            {/* LISTADO */}
            <div className="flex flex-wrap justify-center gap-8 mt-15">
                {activities?.map((e) => (
                    <div
                        key={e.id}
                        className="bg-[hsl(var(--secondary))] border border-white/10 rounded-2xl p-6 
                                   w-full sm:w-[300px] md:w-[350px] lg:w-[380px] shadow-lg hover:scale-[1.02]
                                   transition-all duration-300"
                    >
                        <div className="flex items-center">
                            <button
                                onClick={() => {
                                    setActivityId(e.id);
                                    setIconDelete(true);
                                }}
                                className="ml-auto p-2 text-gray-400 hover:text-red-500 transition"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

                        <div className="w-full flex justify-center">
                            <img
                                src={e.imageUrl}
                                alt={e.name}
                                className="w-28 h-28 object-cover rounded-xl border border-white/10"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold text-(--primary) mt-2 text-center">
                            {e.name}
                        </h2>

                        <p className="text-gray-300 text-sm text-center">{e.description}</p>

                        <div className="flex justify-between mt-2 text-gray-400">
                            <span>Capacidad</span>
                            <span className="text-white">{e.maxCapacity}</span>
                        </div>

                        <div className="flex justify-between text-sm text-gray-400">
                            <span>Requiere reservación</span>
                            <span className={e.requiresReservation ? "text-green-400" : "text-red-400"}>
                                {e.requiresReservation ? "Sí" : "No"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL DELETE */}
            {iconDelete && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-(--card) border border-white/10 rounded-2xl p-8 w-11/12 max-w-md">
                        <h2 className="text-2xl font-semibold text-white text-center mb-4">
                            Borrar Actividad
                        </h2>
                        <p className="text-gray-400 text-sm text-center">
                            Para borrarla, primero debe eliminar todas las clases relacionadas.
                        </p>

                        <div className="flex gap-4 justify-center mt-6">
                            <button
                                onClick={() => setIconDelete(false)}
                                className="px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={() => {
                                    handlerDelete(activityId);
                                    setIconDelete(false);
                                }}
                                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL CREATE */}
            {modal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-(--secondary) rounded-2xl p-8 w-11/12 max-w-md relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setModal(false)}
                            className="absolute top-3 right-3 text-white text-4xl"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-bold text-(--primary) mb-6 text-center">
                            Nueva Actividad
                        </h2>

                        <form className="flex flex-col gap-5" onSubmit={handlerCreate}>
                            
                            <div>
                                <label className="text-white mb-1 block text-sm">Imagen</label>
                                <input
                                    type="file"
                                    className="w-full border rounded-lg px-3 py-2"
                                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                                />
                            </div>

                            <div>
                                <label className="text-white mb-1 block text-sm">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="text-white mb-1 block text-sm">Descripción</label>
                                <textarea
                                    className="w-full border rounded-lg px-3 py-2 min-h-[100px]"
                                    onChange={(e) => setDescrition(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    onChange={(e) => setRequieresReservation(e.target.checked)}
                                    className="w-5 h-5"
                                />
                                <label className="text-white">Requiere reservación</label>
                            </div>

                            <div>
                                <label className="text-white mb-1 block text-sm">Capacidad</label>
                                <input
                                    type="number"
                                    min="0"
                                    className="w-full border rounded-lg px-3 py-2"
                                    onChange={(e) => setMaxCapacity(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 bg-(--primary)/85 hover:bg-(--primary) text-black font-bold px-3 py-2 rounded-lg transition"
                            >
                                Crear Actividad
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivitiesCard;
