'use client';
import { useState } from "react";
import { User, UserCog, X } from "lucide-react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export function LoginForm({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login mock Socio: ${userEmail}`);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login mock Admin: ${adminEmail}`);
  };

  const handleGoogleLogin = () => {
    alert("Google login mock");
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div className="bg-(--card) rounded-3xl shadow-2xl w-full max-w-md mx-4 p-8 relative animate-fadeIn">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-(--muted-foreground) hover:text-(--foreground) transition"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOGO */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/TrainX.svg"
            alt="Logo TrainX"
            width={72}
            height={72}
            className="rounded-full bg-[#1a1a1a] p-3 shadow-md"
          />
          <h1 className="text-4xl font-bold text-(--primary) mt-3">
            TrainX
          </h1>
          <p className="text-sm text-(--muted-foreground)">
            Entrená sin límites
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 bg-(--background) rounded-full overflow-hidden border border-(--border)">
          <button
            className={`flex-1 py-2.5 transition-all text-sm font-medium flex items-center justify-center gap-2 rounded-full ${
              activeTab === "user"
                ? "bg-(--primary) text-[#121212]"
                : "text-(--muted-foreground) hover:bg-(--card)"
            }`}
            onClick={() => setActiveTab("user")}
          >
            <User className="w-4 h-4" /> Socio
          </button>
          <button
            className={`flex-1 py-2.5 transition-all text-sm font-medium flex items-center justify-center gap-2 rounded-full ${
              activeTab === "admin"
                ? "bg-(--primary) text-[#121212]"
                : "text-(--muted-foreground)] hover:bg-[var(--card)"
            }`}
            onClick={() => setActiveTab("admin")}
          >
            <UserCog className="w-4 h-4" /> Admin
          </button>
        </div>

        {/* Contenido */}
        {activeTab === "user" && (
          <div className="space-y-5">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 py-2.5 border rounded-xl transition-colors
             border-[var(--muted)] text-[var(--foreground)] bg-[var(--background)]
             hover:bg-[var(--card)] hover:text-[var(--muted-foreground)]"
            >
            <FcGoogle className="w-4 h-4" />
              Continuar con Google
            </button>

            <div className="relative text-center">
              <hr className="border-(--border)" />
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--card) text-xs text-(--muted-foreground)] px-2">
                o continúa con email
              </span>
            </div>

            <form onSubmit={handleUserLogin} className="space-y-3">
              <div className="flex flex-col">
                <label htmlFor="user-email" className="text-sm text-(--muted-foreground) mb-1">
                  Email
                </label>
                <input
                  id="user-email"
                  type="email"
                  placeholder="socio@ejemplo.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  className="p-2 rounded-xl bg-(--background) border border-(--border) text-(--foreground) focus:outline-none focus:ring-2 focus:ring-(--primary)"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="user-password" className="text-sm text-(--muted-foreground) mb-1">
                  Contraseña
                </label>
                <input
                  id="user-password"
                  type="password"
                  placeholder="••••••••"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                  className="p-2 rounded-xl bg-[var(--background)
                   border border-(--border) text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-xl hover:opacity-90 transition"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        )}

        {activeTab === "admin" && (
          <form onSubmit={handleAdminLogin} className="space-y-3">
            <div className="flex flex-col">
              <label htmlFor="admin-email" className="text-sm text-[var(--muted-foreground)] mb-1">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                placeholder="admin@trainx.com"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                required
                className="p-2 rounded-xl bg-(--background) border border-[var(--border) text-var(--foreground) focus:outline-none focus:ring-2 focus:ring-(--primary)"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="admin-password" className="text-sm text-(--muted-foreground) mb-1">
                Contraseña
              </label>
              <input
                id="admin-password"
                type="password"
                placeholder="••••••••"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
                className="p-2 rounded-xl bg-(--background) border border-(--border) text-(--foreground) focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-(--primary) text-[#121212] font-semibold rounded-xl hover:opacity-90 transition"
            >
              Acceder al Panel
            </button>
          </form>
        )}

        {/* Texto de registro al final del modal */}
        {activeTab === "user" && (
          <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
            ¿Aún no tienes cuenta?{" "}
            <button
              onClick={() => alert("Redirigir a registro")}
              className="text-[var(--primary)] hover:underline font-medium"
            >
              Regístrate
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
