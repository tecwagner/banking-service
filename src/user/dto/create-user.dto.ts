import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  Max,
} from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  @IsNotEmpty({ message: 'This id field cannot be empty' })
  readonly id: string;

  @IsString()
  @IsNotEmpty({ message: 'This fullname field cannot be empty' })
  @Length(4, 20)
  readonly fullname: string;

  @IsString()
  @IsNotEmpty({ message: 'This cpf field cannot be empty' })
  @Max(12)
  readonly cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'This cnpj field cannot be empty' })
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
}
