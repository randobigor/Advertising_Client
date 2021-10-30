export class User{
  id: number;
  nickname: string;
  email: string;
  password: string;
  phone: string;
  isAdmin: boolean;


  constructor(id?: number, nickname?: string, email?: string, password?: string, phone?: string, isAdmin?: boolean) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.isAdmin = isAdmin;
  }
}
