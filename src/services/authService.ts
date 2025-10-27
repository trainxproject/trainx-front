import axios from "axios";
import { IUser, IAuthResponse } from "@/interfaces/User";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const loginUser = async (email: string, password: string): Promise<IAuthResponse> => {
    const {data} =await axios.post(`${API_URL}/auth/login`, {email, password});
    return data;
}

export const registerUser = async (name: string, email: string, password: string): Promise<IUser> => {
    const { data } = await axios.post(`${API_URL}/auth/register`, { name, email, password });
    return data;
}

export const logoutUser = async (token: string): Promise<void> => {
  await axios.post(`${API_URL}/auth/logout`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
}


