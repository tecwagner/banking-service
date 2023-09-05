import { Replace } from '@helpers/Repleace';

export interface IUserProps {
  id?: string;
  fullname: string;
  role: string;
  cpf?: string;
  cnpj?: string;
  email: string;
  password: string;
  wallet?: number;
  accountNumber?: number;
  accountDigit?: number;
  createdAt: Date;
}

export class Users {
  private user: IUserProps;

  constructor(props: Replace<IUserProps, { createdAt?: Date }>) {
    this.user = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  getId(): string {
    return this.user.id;
  }

  getFullname(): string {
    return this.user.fullname;
  }

  getRole(): string {
    return this.user.role;
  }

  getCpf() {
    return this.user.cpf;
  }

  getCnpj() {
    return this.user.cnpj;
  }
  getEmail(): string {
    return this.user.email;
  }

  getPassword(): string {
    return this.user.password;
  }

  getCreatedAt(): Date {
    return this.user.createdAt;
  }

  accountWallet(): number {
    const wallet = 0;

    return wallet;
  }

  accountNumber(): number {
    return Math.floor(Math.random() * 999999);
  }

  accountDigit(): number {
    return Math.floor(Math.random() * 99);
  }
}

// const data = {
//   id: '1234',
//   fullname: 'Marina De Alencar',
//   account: new Account(),
//   cpf: '789654',
//   role: 'Customer',
//   email: 'marina@gmail.com',
//   password: '123',
// };

// const user = new Users(data);
// console.log(user);
