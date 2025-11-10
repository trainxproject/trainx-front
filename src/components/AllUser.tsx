'use client';

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getAllUsers } from "@/services/adminServices"; // tu servicio existente
import { IUserList } from "@/interfaces/User";

export const UserListView = () => {
  const [users, setUsers] = useState<IUserList[]>([]);

  // Cargar usuarios al inicio
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers();
        if (data) {
          setUsers(data);
        } else {
          toast.error("No se pudieron cargar los usuarios");
        }
      } catch (error) {
        toast.error("Error al cargar los usuarios");
      }
    };

    fetchData();
  }, []);

  // Acción para cancelar suscripción (placeholder hasta implementar servicio)
//   const handleCancelSubscription = async (userId: string) => {
//     try {
//       // 🚧 Por ahora solo mostramos una notificación
//       toast.info(`Funcionalidad en desarrollo. ID usuario: ${userId}`);
//       // Más adelante: await cancelSubscription(userId);
//     } catch (error) {
//       toast.error("Error al cancelar la suscripción");
//     }
//   };

  console.log("Componente de lista")

  return (
    <div className="p-6 md:p-12 bg-(--secondary) border border-(--muted-foreground) rounded-2xl shadow-lg mx-6 my-6">
      {/* Título */}
      <h3 className="text-2xl md:text-3xl font-semibold text-(--primary) mb-8">
        Suscripciones de Usuarios
      </h3>

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base border-collapse">
          <thead>
            <tr className="bg-(--background) text-(--primary)">
              <th className="p-3 text-left">Usuario</th>
              <th className="p-3 text-left">Plan</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Último Pago</th>
              <th className="p-3 text-left">Entrenador</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((u) => (
                <tr key={u.id} className="border-t border-(--muted-foreground)">
                  <td className="p-3 font-medium text-(--card-foreground)">
                    {u.name}
                  </td>
                  <td className="p-3">{u.plan || "Sin plan"}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-xl text-xs ${
                        u.status?.toLowerCase() === "activo"
                          ? "bg-green-500/20 text-green-600"
                          : "bg-red-500/20 text-red-600"
                      }`}
                    >
                      {u.status || "Desconocido"}
                    </span>
                  </td>
                  <td className="p-3 text-(--muted-foreground)">
                    {u.lastPayment || "Sin registro"}
                  </td>
                  <td className="p-3">{u.trainer || "No asignado"}</td>
                  <td className="p-3 text-center">
                    <button
                    //   onClick={() => handleCancelSubscription(u.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-(--muted-foreground)">
                  No hay usuarios registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};