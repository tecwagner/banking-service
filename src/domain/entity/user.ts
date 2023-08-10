import { Replace } from '@helpers/Repleace';
import { Account } from './user_account';

export interface IUserProps {
  id?: string;
  fullname: string;
  role: string;
  account: Account;
  cpf?: string;
  cnpj?: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class Users {
  private props: IUserProps;

  constructor(props: Replace<IUserProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  getId(): string {
    return this.props.id;
  }

  getFullname(): string {
    return this.props.fullname;
  }

  getAccount(): Account {
    return this.props.account;
  }

  getRole(): string {
    return this.props.role;
  }

  getCpf() {
    return this.props.cpf;
  }

  getCnpj() {
    return this.props.cnpj;
  }
  getEmail(): string {
    return this.props.email;
  }

  getPassword(): string {
    return this.props.password;
  }

  getCreatedAt(): Date {
    return this.props.createdAt;
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
