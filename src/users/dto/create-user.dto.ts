import { IsEmail, MinLength } from "class-validator";

// src/users/dto/create-user.dto.ts
export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
