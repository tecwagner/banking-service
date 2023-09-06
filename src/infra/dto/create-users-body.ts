import { IsEmail, IsNotEmpty, IsString, Length, Max } from 'class-validator';

export class CreateUserBody {
  @IsString()
  @IsNotEmpty({ message: 'This fullname field cannot be empty' })
  @Length(4, 20)
  fullname: string;

  @IsString()
  @IsNotEmpty({ message: 'This role field cannot be empty' })
  @Length(4, 20)
  role: string;

  @IsString()
  // @Max(12)
  cpf: string;

  @IsString()
  // @Max(14)
  cnpj: string;

  @IsString()
  @IsNotEmpty({ message: 'This email field cannot be empty' })
  @IsEmail()
  @Length(4, 20)
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'This password field cannot be empty' })
  @Length(4, 50)
  password: string;
}
