import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Classes, Schedules } from "@/interfaces/Classes";
import { getAllClasses, getAllSchedule } from "@/services/classesService";
import { deleteSchedules, createSchedule } from "@/services/adminServices";
import { toast } from "sonner";
import { Trainers } from "@/interfaces/Trainer";
import { getAllTrainers } from "@/services/trainersService";

const ScheduleCards: React.FC = () =>  {

    const [modal, setModal] = useState(false);
    const [iconDelete, setIconDelete] = useState(false);
    const [Schedules, setSchedules] = useState<Schedules[]>([]);
    const [scheduleId, setScheduleId] = useState<string>("");

    const [trainers, setTrainers] = useState<Trainers[]>([]);
    const [activities, setActivities] = useState<Classes[]>([]);

    const [activityId, setActivityId] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [trainer, setTrainer] = useState<string>("");

    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    const refreshSchedules = async () => {
        try {
            const data = await getAllSchedule();
            setSchedules(data);
        } catch (error) {
            console.error("Error refrescando las clases", error);
        }
    };

    const refreshDependencies = async () => {
        try {
            const [c, t] = await Promise.all([
                getAllClasses(),
                getAllTrainers(),
            ]);
            setActivities(c);
            setTrainers(t);
        } catch (error) {
            console.error("Error cargando dependencias", error);
        }
    };

    const handlerCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await createSchedule(
                activityId,
                date,
                startTime,
                endTime,
                trainer
            );

            if (response) {
                toast.success("Clase creada correctamente");
                await refreshSchedules();
                setModal(false);
            }

            return response;

        } catch (error) {
            console.error("Error al crear la clase: ", error);
            return null;
        }
    };

    const handlerDelete = async (scheduleId: string) => {
        try {
            const response = await deleteSchedules(scheduleId);

            if (response) {
                toast.success("Clase eliminada");
                await refreshSchedules();
            }

            return response;

        } catch (error) {
            console.error("Error al eliminar la clase: ", error);
            return null;
        }
    };

    useEffect(() => {
        refreshSchedules();
        refreshDependencies();
    }, []);

     return (

        <div  className="min-h-screen  flex flex-col  bg-(--background) flex flex-wrap  mt-29">
                <div className="mb-3 flex flex-col gap-1 items-center">
                    <h1 className="text-4xl font-semibold text-white tracking-tight leading-tight">
                    Gestión de Clases
                    </h1>
                     <h3 className="text-lg text-gray-400 ">
                    Crea, edita y administra las clases del gimnasio
                    </h3>
                </div>
                

                <div className="w-full flex justify-end px-10 mt-6">
                    <button
                    onClick={()=> setModal(true)}
                    className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 transition"
                    >+ Nueva Clase</button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mt-15">
                { Schedules.map((e) => {
                
                return(
                    <div key={e.id}
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
                        <div className="flex items-center">
                       
                        <button
                            onClick={()=> {setIconDelete(true), setScheduleId(e.id)}}
                            aria-label="Eliminar"
                            title="Eliminar"
                            className="ml-auto p-2 rounded-md text-gray-400 hover:text-red-500 hover:bg-transparent focus:outline-none transition active:scale-95"
                        >
                            <Trash2 size={18} />
                        </button>
                        </div>

                    <h2 className="text-2xl font-semibold text-(--primary) text-center w-full">
                        {e.trainer}
                    </h2>

                    <p className="text-gray-300 text-sm text-center leading-snug w-full italic">
                        {e.dayOfWeek}
                    </p>

                    <div className="mt-3 flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                        <h3 className="text-gray-400 text-xs uppercase tracking-wide">
                            Día:
                        </h3>
                        <span className="text-white font-medium">{e.dayOfWeek}</span>
                        </div>

                        <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                        <h3 className="text-gray-400 text-xs uppercase tracking-wide">
                            Inicio:
                        </h3>
                        <span className="text-white font-medium">{e.startTime}</span>
                        </div>

                        <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                        <h3 className="text-gray-400 text-xs uppercase tracking-wide">
                            Final:
                        </h3>
                        <span className="text-white font-medium">{e.endTime}</span>
                        </div>
                    </div>
                    </div>
                    )})}
                    </div>

            {iconDelete && (
                    <div className="fixed inset-0 bg-gradient-to-b from-black/0 to-black/100 flex items-center justify-center z-50">
                        <div className="relative bg-(--secondary) bg-blend-overlay border border-white/10 rounded-2xl p-8 w-11/12 max-w-md shadow-lg animate-fadeIn">
                        <div className="flex flex-col items-center text-center gap-6">
                            <h2 className="text-2xl font-semibold text-white/75">
                            Borrar Clase
                            </h2>
                            <p className="text-(--foreground)/ text-sm">
                            Al crear una nueva clase, consulte los horarios antes de eliminar clases que tengan reservas.
                            </p>

                            <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => setIconDelete(false)}
                                className="px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition duration-200"
                            >
                                Cancelar
                            </button>

                            <button
                            onClick={() => {handlerDelete(scheduleId), setIconDelete(false)}}
                            className="px-5 py-2 rounded-xl bg-red-600/90 hover:bg-red-700 text-white font-medium transition duration-200"
                            >
                            Eliminar
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}        

            {modal && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">

                <div
                className="bg-(--secondary) rounded-2xl p-8 w-11/12 max-w-md relative border-none"
                onClick={(e) => e.stopPropagation()}
                >
            
                <button
                    onClick={() => setModal(false)}
                    className="absolute top-3 right-3 text-white hover:text-gray-800 transition"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-(--primary) mb-6 text-center">
                    Datos para la Clase
                </h2>

             
                <form
                    className="flex flex-col gap-5"
                    onSubmit={handlerCreate}
                    >
                    {/* Día de la clase */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                        Día de la Clase
                        </label>

                        <select
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white text-black border border-white/20 rounded-lg px-3 py-2 focus:outline-none"
                        >
                        <option value="">Selecciona un día</option>
                        {days.map((d) => (
                            <option key={d} value={d} >
                            {d}
                            </option>
                        ))}
                        </select>
                    </div>

                    {/* Inicio */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                        Inicio de la Clase
                        </label>
                        <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full bg-white text-black border border-white/20 rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Final */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                        Final de la Clase
                        </label>
                        <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full bg-white text-black border border-white/20 rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Entrenador */}
                    <div>
                        <label className="block text-sm font-medium text-(--foreground) mb-1">
                        Entrenador
                        </label>

                        <select
                        value={trainer}
                        onChange={(e) => setTrainer(e.target.value)}
                        className="w-full bg-white text-black border border-white/20 rounded-lg px-3 py-2"
                        >
                        <option value="">Selecciona un entrenador</option>
                        {trainers.map((t) => (
                            <option key={t.id} value={t.name}>
                            {t.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    {/* Actividad */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                        Actividad
                        </label>

                        <select
                        value={activityId}
                        onChange={(e) => setActivityId(e.target.value)}
                        className="w-full bg-white text-black border border-white/20 rounded-lg px-3 py-2"
                        >
                        <option value="">Selecciona una actividad</option>
                        {activities.map((a) => (
                            <option key={a.id} value={a.id}>
                            {a.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-(--primary)/85 text-black font-semibold text-md px-2 py-2 rounded-lg hover:bg-(--primary) transition
                        hover:shadow-xl/65 hover:shadow-black/80"
                    >
                        Crear Clase
                    </button>
                </form>
        </div>
    </div>
    )}
        </div>
    )
}


export default ScheduleCards