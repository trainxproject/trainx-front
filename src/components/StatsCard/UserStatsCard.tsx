
// import { Users, Activity, Calendar, BarChart3, Search, icons, User, CheckCircle, Clock, XCircle, Check, DollarSign, Ban, Timer, Slash, UserCheck2Icon, UserX2Icon, UserX, UserXIcon, UserX2, UserRoundX, UserRoundXIcon, UserCheck } from "lucide-react";
// import { useEffect, useState } from "react";
// import { getAllUsers } from "@/services/userService";
// import { IUser } from "@/interfaces/User";
// import { toast } from "sonner";


// // const user = [{
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // },
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "active",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }, 
// // {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "pending",
// //     trainer: "Carlos VII",
// //     state: "inactive"
// // }, {
// //     name: "Carlos",
// //     email: "carlos123@hotmail.com",
// //     plan: "week-3",
// //     pay: "cancelled",
// //     trainer: "Carlos VII",
// //     state: "active"
// // }


// // ]


// const UserStatsCard: React.FC = ()=> {
//     const [tabSelect, setTabSelected] = useState("class")
//     const [users, setUser] = useState<IUser[]>([])

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const data: IUser[] = await getAllUsers();
//             console.log("Usuarios: ", data);
//             setUser(data)
//           } catch (error) {
//             toast.error("Error al cargar los usuarios");
//           }
//         };
  
//         fetchData();
//       }, []);

//     return (

//         <div  className="min-h-screen items-center flex flex-col  bg-(--background) flex flex-wrap  mt-29">
//                 <div className="mb-3 flex flex-col gap-1">
//                     <h1 className="text-4xl font-semibold text-white tracking-tight leading-tight">
//                     Gestión de Usuarios
//                     </h1>
                    
//                 </div>
//         <h3 className="text-lg text-gray-400 ">
//                     Administra socios, planes y pagos
//                  </h3>
//             <div  className="flex flex-col bg-(--secondary) border border-transparent p-6 rounded-xl 
//                 w-full max-w-7xl h-auto min-h-[480px] mx-auto relative mt-15">
                    
//                 <div className="relative w-full">
                    
//                     <button
//                     >
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
//                     </button>
//                     <input
//                         type="text"
//                         placeholder="Buscar..."
//                         className="pr-4 py-2 w-full rounded-lg border transition-all placeholder-gray-400 duration-900"
//                         style={{ paddingLeft: "2.9rem" }} 
//                     />
//                 </div>
//                 <div className="-mx-6 mt-8">  
//                     <div className="flex w-full">
//                     {[
//                         { key: "user", label: "Usuarios" },
//                         { key: "email", label: "Email" },
//                         { key: "plan", label: "Plan" },
//                         { key: "pay", label: "Pago" },
//                         { key: "trainer", label: "Entrenador" },
//                         { key: "state", label: "Estado" },
//                     ].map((items) => (
//                         <div 
//                         key={items.key}
//                         className="flex-1"
//                         >
//                         <h3
//                             className={`flex-1 text-center py-3 font-semibold select-none
//                             text-white transition-all duration-300 ease-in-out
//                             bg-transparent hover:bg-white/10 border border-white/10
//                             ${
//                                 tabSelect === items.key
//                                 ? "bg-white/20 text-white border-white/20"
//                                 : ""
//                             }`}
//                             >
//                         {items.label}
//                         </h3>

//                         <div className="text-white mt-3 flex flex-col gap-2
//                             bg-white/10 border border-white/20 p-4
//                             backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]
//                             transition-all duration-300 hover:bg-white/20 hover:border-white/30">
//                             {users.slice(0, 10).map((e, i) => {
//                             switch(items.key) {

//                             case "user": return <div key={i} className="font-medium">{e.name}</div>;
//                             case "email": return <div key={i} className="text-gray-300 ">{e.email}</div>;
//                             case "plan": return <div key={i} className="text-[hsl(var(--primary))]">{e.plan}</div>;
//                             case "pay": return (
                            
//                             <div key={i} className="flex items-center gap-2">
//                                 {e.pay === "active" && (
//                                     <>
//                                     <CheckCircle/>
//                                     <div className="text-green-400 font-medium">{e.pay}</div>
//                                     </>
//                                 )}
//                                 {e.pay === "pending" && (
//                                     <>
//                                     <Timer/>
//                                     <div className="text-yellow-400 font-medium">{e.pay}</div>
//                                     </>
//                                 )}
//                                 {e.pay === "cancelled" && (
//                                     <>
//                                     <Ban/>
//                                     <div className="text-red-400 font-medium">{e.pay}</div>
//                                     </>
//                                 )}
                            
//                             </div>);
//                             case "trainer": return <div key={i}>{e.trainer}</div>;
//                             case "state": return <div key={i} className="flex items-center gap-2">
//                                 {e.state === "active" && (
//                                     <>
//                                     <UserCheck2Icon/>
//                                     <div className="text-green-400 font-medium">{e.state}</div>
//                                     </>
//                                 )}
//                                  {e.state === "inactive" && (
//                                     <>
//                                     <UserX2/>
//                                     <div className="text-red-400 font-medium">{e.state}</div>
//                                     </>
//                                 )}
                                
                                
//                                 </div>;
//                             default: return null;
//                             }
//                         }
                        
                        
//                         )}</div>



//                         </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
            
//                         <div className="flex flex-wrap justify-center gap-8 mt-15">
           
//                 <div
//                     className="bg-(--secondary) border border-white/10 p-6 rounded-xl 
//                     w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-[220px]
//                     shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
//                     hover:shadow-[0_6px_25px_rgba(255,255,255,0.1)] 
//                     transition-all duration-300 "
//                 >
//                     <h3 className="text-gray-100">Total de Usuarios en la Aplicación</h3>

//                     <div className="flex items-baseline p-2">
//                     <h2 className="font-bold text-3xl text-(--primary)">150</h2>
//                     <p className="ml-2 text-gray-400">activos</p>
//                     </div>
//                 </div>

             
//                 <div
//                     className="bg-(--secondary) border border-white/10 p-6 rounded-xl 
//                     w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-[220px]
//                     shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
//                     hover:shadow-[0_6px_25px_rgba(255,255,255,0.1)] 
//                     transition-all duration-300"
//                 >
//                     <h3 className="text-gray-100">Pagos Pendientes</h3>

//                     <div className="flex items-baseline p-2">
//                     <h2 className="font-bold text-3xl text-(--primary)">0</h2>
//                     </div>
//                 </div>
//                 </div>



//         </div>
//     )
// }

// export default UserStatsCard;

"use client";
import React, { useEffect, useState } from "react";
import { IUser } from "@/interfaces/User";
import { getAllUsers } from "@/services/adminServices";
import { toast } from "sonner";

const UserListView = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [activeTab, setActiveTab] = useState("todos");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers();
        if (data) {
          setUsers(data);
          console.log("Usuarios cargados:", data);
        } else {
          toast.error("No se pudieron cargar los usuarios");
        }
      } catch (error) {
        toast.error("Error al cargar los usuarios");
      }
    };

    fetchData();
  }, []);

  const filteredUsers =
    activeTab === "todos"
      ? users
      : users.filter((u) => u.status === activeTab);

  return (
    <div className="min-h-screen p-6 text-white">
      <h2 className="text-2xl font-semibold mb-4">Usuarios</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["todos", "active", "inactive"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab
                ? "bg-white/20 border border-white/30"
                : "bg-white/10 border border-white/10 hover:bg-white/20"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "todos" ? "Todos" : tab === "active" ? "Activos" : "Inactivos"}
          </button>
        ))}
      </div>

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto bg-white/10 rounded-xl p-4 border border-white/20">
        {filteredUsers.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr className="text-white/70 border-b border-white/20">
                <th className="py-2">Nombre</th>
                <th className="py-2">Email</th>
                <th className="py-2">Estado</th>
                <th className="py-2">Rol</th>
                <th className="py-2">Pago</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.slice(0, 10).map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-white/10 hover:bg-white/5 transition"
                >
                  <td className="py-2">{u.name}</td>
                  <td className="py-2">{u.email}</td>
                  <td className="py-2">{u.status}</td>
                  <td className="py-2">
                    {u.isAdmin ? "Administrador" : "Usuario"}
                  </td>
                  <td className="py-2">
                    {/* {u.hasPaid ? "Pagado" : "Pendiente"} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-white/70 py-6">
            No hay usuarios para mostrar.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserListView;
