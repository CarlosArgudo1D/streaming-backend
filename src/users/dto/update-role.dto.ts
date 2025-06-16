// src/users/dto/update-role.dto.ts
import { IsEnum } from 'class-validator';
import { UserRole } from 'src/auth/roles.enum';

export class UpdateRoleDto {
  @IsEnum(UserRole, { message: 'Rol no válido. Usa admin, editor o viewer' })
  role: UserRole;
}
