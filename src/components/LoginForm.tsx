import { useState } from "react";
import { Dumbbell, User, UserCog } from "lucide-react";

interface LoginPageProps {
  onLogin: (role: 'user' | 'admin', email: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function LoginForm({ onLogin, open = true, onOpenChange }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin('user', userEmail);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin('admin', adminEmail);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-[#FF6B00]">
              <Dumbbell className="w-8 h-8 text-[#121212]" />
            </div>
            <h1 className="text-2xl font-bold text-[#FF6B00]">TrainX</h1>
            <p className="text-sm text-gray-500">Gestión de Turnos</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-6">
            <button
              className={`flex-1 py-2 flex items-center justify-center gap-2 ${
                activeTab === 'user' ? 'bg-[#FF6B00] text-[#121212]' : 'text-gray-500'
              } font-semibold`}
              onClick={() => setActiveTab('user')}
            >
              <User className="w-4 h-4" />
              Socio
            </button>
            <button
              className={`flex-1 py-2 flex items-center justify-center gap-2 ${
                activeTab === 'admin' ? 'bg-[#FF6B00] text-[#121212]' : 'text-gray-500'
              } font-semibold`}
              onClick={() => setActiveTab('admin')}
            >
              <UserCog className="w-4 h-4" />
              Admin
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === 'user' && (
            <form onSubmit={handleUserLogin} className="space-y-4">
              <div>
                <label htmlFor="user-email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="user-email"
                  type="email"
                  placeholder="socio@ejemplo.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
              <div>
                <label htmlFor="user-password" className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                  id="user-password"
                  type="password"
                  placeholder="••••••••"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-[#FF6B00] text-[#121212] font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Iniciar Sesión
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                ¿No tienes cuenta?{' '}
                <a href="#" className="text-[#FF6B00] hover:underline">Regístrate aquí</a>
              </p>
            </form>
          )}

          {activeTab === 'admin' && (
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="admin-email"
                  type="email"
                  placeholder="admin@trainx.com"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                  id="admin-password"
                  type="password"
                  placeholder="••••••••"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-[#FF6B00] text-[#121212] font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Acceder al Panel
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}