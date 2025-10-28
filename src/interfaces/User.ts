export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}


// Respuesta de login
export interface IAuthResponse {
  access_token: string;
  user: IUser;
}

// Datos enviados al backend para login
export interface ILoginData {
  email: string;
  password: string;
}

// Datos enviados al backend para register
export interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface JWTPayload {
  sub: string;
  email: string;
  name?: string;
  isAdmin?: boolean;
}