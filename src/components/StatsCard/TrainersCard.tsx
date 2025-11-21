'use client'

import { Star, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllTrainers } from "@/services/trainersService";
import { Trainers } from "@/interfaces/Trainer";
import { createTrainer, deleteTrainer } from "@/services/adminServices";
import { uploadCloudinaryService } from "@/services/uploadCloudinaryService";
import { toast } from "sonner";

const TrainersCard: React.FC = () =>  {

    const [modal, setModal] = useState(false);
    const [iconDelete, setIconDelete] = useState(false);
    const [trainers, setTrainers] = useState<Trainers[]>([]);
    const [trainerId, setTrainerId] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    // Crear entrenador
    const [name, setName] = useState<string>("");
    const [specialization, setSpecialization] = useState<string>("");
    const [formation, setFormation] = useState<string>("");
    const [available, setAvailable] = useState<boolean>(true);

    useEffect(() => {
        const savedModal = localStorage.getItem("trainerModal");
        const savedDelete = localStorage.getItem("trainerDelete");
        const savedTrainerId = localStorage.getItem("trainerId");

        if (savedModal === "true") setModal(true);
        if (savedDelete === "true") setIconDelete(true);
        if (savedTrainerId) setTrainerId(savedTrainerId);
    }, []);

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

    // Handler para crear entrenador con subida de imagen a Cloudinary
    const handlerCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            let uploadedImageUrl = "";

            if (file) {
                const token = localStorage.getItem("token") || "";
                uploadedImageUrl = await uploadCloudinaryService(file, token);
            }

            const response = await createTrainer(
                name,
                specialization,
                formation,
                uploadedImageUrl,
                available
            );

            if (response) {
                toast.success("Entrenador creado correctamente");
                await loadTrainers();
                closeModal();
                setName("");
                setSpecialization("");
                setFormation("");
                setFile(null);
                return response;
            }

        } catch (error) {
            console.error("Error al crear el entrenador", error);
            toast.error("Error al subir la imagen o crear el entrenador");
            return null;
        }
    };

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
            if (status === 401) toast.error("No posees los permisos necesarios");
            else if (status === 500) toast.error("Error interno al eliminar");
            console.error("Error al eliminar el entrenador: ", error);
            return null;
        }
    };

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
                                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
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
