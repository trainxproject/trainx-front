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

      {/* Filtro
       */}
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
