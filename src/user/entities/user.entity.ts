import { Replace } from 'src/helpers/Repleace';
// import { AccountUser } from './user_account.entity';

export type Role = 'Customer' | 'Shopkeeper';

export interface IUserProps {
  id: string;
  fullname: string;
  // account: AccountUser;
  cpf?: string;
  cnpj?: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class User {
  private props: IUserProps;
  // private _role: Role = 'Customer';
  // private _account: AccountUser;

  constructor(props: Replace<IUserProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    // this.getAccount();
  }

  get id(): string {
    return this.props.id;
  }

  get fullname(): string {
    return this.props.fullname;
  }

  // set account(account: AccountUser) {
  //   this.props.account = account;
  // }

  // get roles(): Role {
  //   return this._role;
  // }

  get cpf() {
    return this.props.cpf;
  }

  get cnpj() {
    return this.props.cnpj;
  }
  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}

// const data = {
//   id: '1234',
//   fullname: 'Marina De Alencar',

//   cpf: '789654',
//   role: 'Customer',
//   email: 'marina@gmail.com',
//   password: '123',
// };

// const user = new User(data);
// const userAccount = new AccountUser();
// console.log(user);
// console.log(userAccount);
