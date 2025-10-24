import { Dumbbell, Bell, User, LogOut, LogIn } from "lucide-react";

interface HeaderProps {
  userEmail?: string;
  onLogout?: () => void;
  onOpenLogin?: () => void;
}

export function NavBar({ userEmail, onLogout, onOpenLogin }: HeaderProps) {
  const isLoggedIn = !!userEmail;

  return (
    <header className="border-b sticky top-0 z-50" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }} >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <Dumbbell className="w-6 h-6" style={{ color: "var(--background)" }} />
          </div>
          <div>
            <h1 className="text-[24px] font-bold" style={{ color: "var(--primary)" }}>
              TrainX
            </h1>
            <p className="text-[12px] text-muted-foreground">
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
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-2 px-4 py-2 rounded"
              style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
            >
              <LogIn className="w-4 h-4" />
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
}