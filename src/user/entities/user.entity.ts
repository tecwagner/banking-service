import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Repleace';

export interface IUserProps {
  firstname: string;
  lastname: string;
  cpf: string;
  cnpj?: string;
  username: string;
  email: string;
  password: string;
  // role: string;
  createdAt: Date;
}

export class User {
  private _id: string;
  private props: IUserProps;

  constructor(props: Replace<IUserProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  get firstname(): string {
    return this.props.firstname;
  }

  set firstname(firstname: string) {
    this.props.firstname = firstname;
  }

  get lastname(): string {
    return this.props.lastname;
  }

  set lastname(lastname: string) {
    this.props.lastname = lastname;
  }

  get cpf() {
    return this.props.cpf;
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  get cnpj() {
    return this.props.cnpj;
  }

  set cnpj(cnpj: string) {
    this.props.cnpj = cnpj;
  }

  get username(): string {
    return this.props.username;
  }

  set username(username: string) {
    this.props.username = username;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }

  // get role(): string {
  //   return this.props.role;
  // }

  // set role(role: string) {
  //   this.props.role = role;
  // }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
