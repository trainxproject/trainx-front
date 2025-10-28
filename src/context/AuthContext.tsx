'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { IUser, IAuthResponse, ILoginData, IRegisterData, JWTPayload } from "@/interfaces/User";
import { loginUser, registerUser, loginWithPassport } from "@/services/authService";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";



interface AuthContextProps {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  login: (data: ILoginData) => Promise<void>;
  register: (data: IRegisterData) => Promise<void>;
  loginWithGoogle: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  // 🔹 Función para mapear el payload del JWT a IUser
  const mapToIUser = (data: Partial<IUser> & Partial<JWTPayload>): IUser => ({
    id: data.id || data.sub || "",
    name: data.name || "Mi perfil",
    email: data.email || "",
    isAdmin: data.isAdmin ?? false,
  });

  // 🔹 Manejar sesión al iniciar (login normal, Google login o sesión guardada)
  useEffect(() => {
    const tokenFromURL = searchParams.get("token");

    if (tokenFromURL) {
      // flujo Google login
      try {
        const decoded = jwtDecode<JWTPayload>(tokenFromURL);
        const userData = mapToIUser(decoded);
        setUser(userData);
        setToken(tokenFromURL);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", tokenFromURL);

        router.replace("/dashboard/user");
      } catch (err) {
        console.error("Error decodificando token de Google:", err);
      }
    } else {
      // login tradicional o sesión guardada
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
    }

    setLoading(false);
  }, [searchParams, router]);

  // 🔹 Login tradicional
  const login = async (data: ILoginData) => {
    const response: IAuthResponse = await loginUser(data);
    const userData = mapToIUser(response.user);
    setUser(userData);
    setToken(response.access_token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", response.access_token);
  };

  // 🔹 Register
  const register = async (data: IRegisterData) => {
    const newUser = await registerUser(data);
    const userData = mapToIUser(newUser);
    setUser(userData);
    // No hay token todavía; el usuario deberá loguearse
  };

  // 🔹 Login con Google
  const loginWithGoogle = () => {
    loginWithPassport();
  };

  // 🔹 Logout
const logout = () => {
  setUser(null);
  setToken(null);
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  router.push("/");
};

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, loginWithGoogle,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};