'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { IUser, IAuthResponse, ILoginData, IRegisterData, JWTPayload } from "@/interfaces/User";
import { loginUser, registerUser, loginWithPassport } from "@/services/authService";
import { uploadCloudinaryService } from "@/services/uploadCloudinaryService";
import { updateProfilePicture, updateUserName } from "@/services/userService";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";



interface AuthContextProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  token: string | null;
  loading: boolean;
  login: (data: ILoginData) => Promise<void>;
  register: (data: IRegisterData) => Promise<void>;
  loginWithGoogle: () => void;
  logout: () => void;
  updateUserProfile: (name?: string, file?: File) => Promise<void>;
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
    profilePicture: data.profilePicture || ""
  });

  // 🔹 Manejar sesión al iniciar (login normal, Google login o sesión guardada)
useEffect(() => {
  const tokenFromURL = searchParams.get("token");
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  if (tokenFromURL) {
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
  } else if (storedUser && storedToken) {
      const parsedUser = JSON.parse(storedUser);
      if (!parsedUser.profilePicture) {
        parsedUser.profilePicture = "/default-avatar.png";
      }
    setUser(JSON.parse(storedUser));
    setToken(storedToken);
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
     await registerUser(data);

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

const updateUserProfile = async (name?: string, file?: File) => {
    if (!user || !token) return;

    try {
      let imageUrl = user.profilePicture || "";

      if (file) {
        imageUrl = await uploadCloudinaryService(file, token);
        await updateProfilePicture(user.id, imageUrl);
      }

      
      if (name && name !== user.name) {
        await updateUserName(user.id, name);
      }

      // 🔄 Actualizar contexto y localStorage
      const updatedUser = { ...user, name: name ?? user.name, profilePicture: imageUrl };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Error actualizando perfil:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, loading, login, register, loginWithGoogle,logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};