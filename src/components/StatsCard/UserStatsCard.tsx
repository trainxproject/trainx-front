
import { getAllUsers } from "@/services/userService";
import { Users, Activity, Calendar, BarChart3, Search, icons, User, CheckCircle, Clock, XCircle, Check, DollarSign, Ban, Timer, Slash, UserCheck2Icon, UserX2Icon, UserX, UserXIcon, UserX2, UserRoundX, UserRoundXIcon, UserCheck, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { string } from "yup";

interface User {
  id: number | null;      
  name: string;
  email: string;
  plan: string;
  payment: [{
    plan: string,
    status: string
  }];
  trainer: string;
  status: string;
}

// const user = [{
//     id:1,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//          state: "inactive"
// }], 
// {
//     id:2,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//            state: "inactive"
// }, {
//     id:3,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "inactive"
// },
// {
//     id:4,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     id:5,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//     state: "active"
// }, {
//     id:6,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// },
// {
//     id:7,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     id:8,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//      state: "active"
// }, {
//     id:9,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// },
// {
//     id:10,
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//     state: "inactive"
// }, {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// },
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//     state: "inactive"
// }, {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// },
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//     state: "inactive"
// }, {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// },
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//     state: "inactive"
// }, {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// },
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//     state: "inactive"
// }, {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// },
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "active",
//     trainer: "Carlos VII",
//     state: "active"
// }, 
// {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "pending",
//     trainer: "Carlos VII",
//     state: "inactive"
// }, {
//     name: "Carlos",
//     email: "carlos123@hotmail.com",
//     plan: "week-3",
//     pay: "cancelled",
//     trainer: "Carlos VII",
//     state: "active"
// }
// ]


const UserStatsCard: React.FC = () => {
    const [tabSelect, setTabSelected] = useState("class") 
    const [active, setActive] = useState(false) 
    const [inactive, setInactive] = useState(false)
    const [users, setUsers] = useState<User[]>([])

    useEffect( () => {
        const fetchData = async () => {
            try {
                const Alluser = await getAllUsers();
                console.log(Alluser);
                setUsers(Alluser);
            } catch (error) {
                console.error("Error al traer los usuarios: ", error)
            }
        }
        fetchData()
    }, [])

    return (

        <div  className="min-h-screen items-center flex flex-col  bg-(--background) flex flex-wrap  mt-10">
                <div className="mb-3 flex flex-col gap-1">
                    <h1 className="text-4xl font-semibold text-white tracking-tight leading-tight">
                    Gestión de Usuarios
                    </h1>
                    
                </div>
        <h3 className="text-lg text-gray-400 ">
                    Administra socios, planes y pagos
                 </h3>
            <div  className="flex flex-col bg-(--secondary) border border-transparent p-6 rounded-xl 
                w-full max-w-7xl h-auto min-h-[480px] mx-auto relative mt-15 
                
                
                    shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                    hover:shadow-[0_6px_25px_rgba(255,255,255,0.1)] 
                    transition-all duration-300 
                    bg-[hsl(var(--secondary))] 
                ">
                    
                <div className="relative w-full">
                    
                    <button
                    >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
                    </button>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="pr-4 py-2 w-full rounded-lg border transition-all placeholder-gray-400 duration-900"
                        style={{ paddingLeft: "2.9rem" }} 
                    />
                </div>
                <div className="-mx-6 mt-8">  
                    <div className="flex w-full">
                    {[
                        { key: "user", label: "Usuarios" },
                        { key: "email", label: "Email" },
                        { key: "plan", label: "Plan" },
                        { key: "paymentStatus", label: "Pago" },
                        { key: "trainer", label: "Entrenador" },
                        { key: "status", label: "Estado" },
                    ].map((items) => (
                        <div 
                        key={items.key}
                        className="flex-1"
                        >
                        <h3
                            className={`flex-1 text-center py-3 font-semibold select-none
                            text-white transition-all duration-300 ease-in-out
                            bg-transparent hover:bg-white/10 border border-white/10
                            ${
                                tabSelect === items.key
                                ? "bg-white/20 text-white border-white/20"
                                : ""
                            }`}
                            >
                        {items.label}
                        </h3>

                        <div className="text-white mt-3 flex flex-col gap-2
                            bg-white/10 border border-white/20 p-4
                            backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]
                            transition-all duration-300 hover:bg-white/20 hover:border-white/30
                            ">
                            {users.slice(0, 10).map((e, i) => {
                            switch(items.key) {

                            case "user": return <div key={i} className="font-medium">{e.name}</div>;
                            case "email": return <div key={i} className="text-gray-300 ">{e.email}</div>;
                            case "plan": return <div key={i} className="text-[hsl(var(--primary))]">{e.payment[0]?.plan}</div>;
                            case "paymentStatus": return (
                            
                            <div key={i} className="flex items-center gap-2">
                                {e.payment[0]?.status === "active" && (
                                    <>
                                    <CheckCircle/>
                                    <div className="text-green-400 font-medium">{e.payment[0]?.status}</div>
                                    </>
                                )}
                                {e.payment[0]?.status === "pending" && (
                                    <>
                                    <Timer/>
                                    <div className="text-yellow-400 font-medium">[{e.payment[0]?.status}]</div>
                                    </>
                                )}
                                {e.payment[0]?.status === "cancelled" && (
                                    <>
                                    <Ban/>
                                    <div className="text-red-400 font-medium">{e.payment[0]?.status}</div>
                                    </>
                                )}
                            
                            </div>);
                            case "trainer": return <div key={i}>{e.trainer}</div>;
                            case "status": return <div key={i} className="flex items-center gap-2">
                                


                                {e.status === "active" && (
                                    <>
                                    <UserCheck2Icon/>
                                    <div className="text-green-400 font-medium">{e.status}</div>
                                    <button
                                onClick={()=> setActive(true)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
                                >
                                    <MoreVertical className="w-10 h-4 text-gray-300 hover:text-white" />
                                </button>
                                    </>
                                    
                                )}
                                 {e.status === "inactive" && (
                                     <>
                                    <UserX2/>
                                    <div className="text-red-400 font-medium">{e.status}</div>
                                    <button
                                onClick={()=> setInactive(true)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
                                >
                                    <MoreVertical className="w-10 h-4 text-gray-300 hover:text-white" />
                                </button>
                                    </>
                                )}
                                
                                </div>;
                            default: return null;
                            }
                        })}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
                {active && 
                (
                    <div className="fixed inset-0 bg-gradient-to-b from-black/0 to-black/100 flex items-center justify-center z-50">
                        <div className="relative bg-[hsl(var(--secondary))] bg-black/100 bg-blend-overlay border border-white/10 rounded-2xl p-8 w-11/12 max-w-md shadow-lg animate-fadeIn">
                        <div className="flex flex-col items-center text-center gap-6">
                            <h2 className="text-2xl font-semibold text-white">
                            Inhabilitar cuenta
                            </h2>
                            <p className="text-gray-400 text-sm">
                            Esta acción desactivará el acceso del usuario. Puedes volver a habilitarlo más tarde.
                            </p>

                            <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => setActive(false)}
                                className="px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition duration-200"
                            >
                                Cancelar
                            </button>

                            <button
                            onClick={()=> console.log("Hola")}
                            className="px-5 py-2 rounded-xl bg-red-600/90 hover:bg-red-700 text-white font-medium transition duration-200"
                            >
                            Inhabilitar
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}

                {inactive && 
                (
                    <div className="fixed inset-0 bg-gradient-to-b from-black/0 to-black/100 flex items-center justify-center z-50">
                        <div className="relative bg-[hsl(var(--secondary))] bg-black/100 bg-blend-overlay border border-white/10 rounded-2xl p-8 w-11/12 max-w-md shadow-lg animate-fadeIn">
                        <div className="flex flex-col items-center text-center gap-6">
                            <h2 className="text-2xl font-semibold text-white">
                            ¿Deseas reactivar esta cuenta?
                            </h2>
                            <p className="text-gray-400 text-sm">
                            El usuario volverá a tener acceso al sistema y podrá usar todas las funciones normalmente.
                            </p>

                            <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => setInactive(false)}
                                className="px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition duration-200"
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={() => console.log("Reactivado")}
                                className="px-5 py-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-700 text-white font-medium transition duration-200"
                            >
                                Reactivar
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}


            
                <div className="flex flex-wrap justify-center gap-8 mt-15">
                <div
                    className="  p-6 rounded-xl 
                    w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-[220px]
                    shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                    hover:shadow-[0_6px_25px_rgba(255,255,255,0.1)] 
                    transition-all duration-300 
                    bg-[hsl(var(--secondary))] 
                                border border-white/10 
                                rounded-2xl p-6 
                                flex flex-col gap-4 
                                shadow-lg shadow-black/20 
                                hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] 
                                hover:scale-[1.02]
                                transition-all duration-300 ease-out"
                >
                    <h3 className="text-gray-100">Total de Usuarios en la Aplicación</h3>

                    <div className="flex items-baseline p-2">
                    <h2 className="font-bold text-3xl text-(--primary)">150</h2>
                    <p className="ml-2 text-gray-400">activos</p>
                    </div>
                </div>

             
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
                    <h3 className="text-gray-100">Pagos Pendientes</h3>

                    <div className="flex items-baseline p-2">
                    <h2 className="font-bold text-3xl text-(--primary)">0</h2>
                    </div>
                </div>


                </div>



        </div>
    )
}

export default UserStatsCard;