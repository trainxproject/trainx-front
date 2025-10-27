export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  profilePicture?: string;
  status: string;
  isAdmin: boolean;
  subscription?: ISubscription | null;
  payments?: IPayment[];
  reservations?: IReservation[];
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}
export interface ISubscription {
  id: string;
  planName: string;
  startDate: string;
  endDate: string;
}

export interface IPayment {
  id: string;
  amount: number;
  date: string;
  status: string;
}

export interface IReservation {
  id: string;
  className: string;
  date: string;
  trainer: string;
}