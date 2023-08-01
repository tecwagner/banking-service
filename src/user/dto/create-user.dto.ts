import { IsEmail, IsNotEmpty, IsString, Length, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'This firstname field cannot be empty' })
  @Length(4, 20)
  readonly firstname: string;

  @IsString()
  @IsNotEmpty({ message: 'This lastname field cannot be empty' })
  @Length(4, 20)
  readonly lastname: string;

  @IsString()
  @IsNotEmpty({ message: 'This cpf field cannot be empty' })
  @Max(12)
  readonly cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'This cnpj field cannot be empty' })
  @Max(14)
  readonly cnpj: string;

  @IsString()
  @IsNotEmpty({ message: 'This username field cannot be empty' })
  @Length(4, 20)
  readonly username: string;

  @IsString()
  @IsNotEmpty({ message: 'This email field cannot be empty' })
  @IsEmail()
  @Length(4, 20)
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'This password field cannot be empty' })
  @Length(4, 50)
  readonly password: string;

  @IsString()
  @IsNotEmpty({ message: 'This role field cannot be empty' })
  @Max(10)
  readonly role: string;
}
