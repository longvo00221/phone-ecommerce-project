export interface userLogin {
  email: string;
  password: string;
}

export interface User {
  id_user: number;
  name: string;
  email: string;
  password: string;
  birthday: Date;
  address: string;
  phone: string;
  role: boolean;
  accessToken: string;
}
