"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { IUser, IAuthResponse } from "@/interfaces/User";
import { loginUser, registerUser, logoutUser } from "@/services/authService";

interface AuthContextProps {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Recuperar usuario/token del localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // --- LOGIN ---
  const login = async (email: string, password: string) => {
    const data: IAuthResponse = await loginUser(email, password);
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  // --- REGISTER ---
  const register = async (name: string, email: string, password: string) => {
    const newUser: IUser = await registerUser(name, email, password);
    setUser(newUser); // opcional, solo momentáneo
    // no guardamos token, se hace login después
  };

  // --- LOGOUT ---
  const logout = async () => {
    if (token) await logoutUser(token);
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};