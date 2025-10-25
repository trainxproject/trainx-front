'use client';
import { Bell, User, LogOut, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import { useAuthModal } from "@/context/AuthModalContext";

interface HeaderProps {
  userEmail?: string;
  onLogout?: () => void;
}

export function NavBar({ userEmail, onLogout }: HeaderProps) {
  const { openLogin, openRegister } = useAuthModal(); // context
  const isLoggedIn = !!userEmail;

  return (
    <header
      className="border-b sticky top-0 z-50"
      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
                      src="/TrainX.svg"
                      alt="Logo TrainX"
                      width={50}
                      height={50}
                      className="w-10 h-10"
                      
                    />
          <div>
            <h1 className="text-3xl font-bold" style={{ color: "var(--primary)" }}>
              TrainX
            </h1>
            <p className="text-sm text-muted-foreground">
              Entrená sin límites
            </p>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              {userEmail && (
                <span className="text-[13px] text-muted-foreground hidden md:block">
                  {userEmail}
                </span>
              )}

              {/* Notificaciones */}
              <button className="relative p-2 rounded hover:bg-gray-700 transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
                >
                  3
                </span>
              </button>

              {/* Perfil */}
              <button className="p-2 rounded hover:bg-gray-700 transition-colors">
                <User className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Logout */}
              {onLogout && (
                <button
                  onClick={onLogout}
                  className="p-2 rounded hover:bg-gray-700 transition-colors"
                >
                  <LogOut className="w-5 h-5 text-muted-foreground" />
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={openLogin} // context
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
              >
                <LogIn className="w-4 h-4" />
                Iniciar Sesión
              </button>
              <button
                onClick={openRegister} // context
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors
             border-[var(--primary)] text-[var(--primary)] bg-[var(--background)] 
             hover:bg-[var(--primary)] hover:text-[var(--background)]"
              >
                <UserPlus className="w-4 h-4" />
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}