import { Dumbbell, Bell, User, LogOut, LogIn } from "lucide-react";

interface NavBarProps {
  userEmail?: string;
  onLogout?: () => void;
  onOpenLogin?: () => void;
}

export function NavBar({ userEmail, onLogout, onOpenLogin }: NavBarProps) {
  const isLoggedIn = !!userEmail;

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50" style={{ backgroundColor: '#121212' }}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF6B00' }}>
            <Dumbbell className="w-6 h-6" style={{ color: '#121212' }} />
          </div>
          <div>
            <h1 className="text-[24px] font-bold" style={{ color: '#FF6B00' }}>TrainX</h1>
            <p className="text-[12px] text-gray-500">Gestión de Turnos</p>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              {userEmail && (
                <span className="text-[13px] text-gray-500 hidden md:block">{userEmail}</span>
              )}

              {/* Notificaciones */}
              <button className="relative p-2 rounded hover:bg-gray-100">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-[10px]" style={{ backgroundColor: '#FF6B00', color: '#121212' }}>
                  3
                </span>
              </button>

              {/* Perfil */}
              <button className="p-2 rounded hover:bg-gray-100">
                <User className="w-5 h-5" />
              </button>

              {/* Logout */}
              {onLogout && (
                <button className="p-2 rounded hover:bg-gray-100" onClick={onLogout}>
                  <LogOut className="w-5 h-5" />
                </button>
              )}
            </>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center px-4 py-2 rounded-lg font-semibold"
              style={{
                backgroundColor: '#FF6B00',
                color: '#121212',
              }}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
}