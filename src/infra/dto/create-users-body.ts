import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
} from 'class-validator';

export class CreateUserBody {
  @IsString()
  @IsNotEmpty({ message: 'This fullname field cannot be empty' })
  @Length(4, 20)
  readonly fullname: string;

  @IsString()
  @IsNotEmpty({ message: 'This role field cannot be empty' })
  @Length(4, 20)
  readonly role: string;

  @IsString()
  @Max(12)
  readonly cpf: string;

  @IsString()
  @Max(14)
  readonly cnpj: string;

  @IsString()
  @IsNotEmpty({ message: 'This email field cannot be empty' })
  @IsEmail()
  @Length(4, 20)
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'This password field cannot be empty' })
  @Length(4, 50)
  readonly password: string;

  // @IsNumber()
  // wallet: number;

  // @IsNumber()
  // accountNumber: number;

  // @IsNumber()
  // accountDigit: number;
}
