import { Injectable } from '@nestjs/common';
import { contentDb } from 'src/prisma/clients';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/auth/roles.enum'; // Asegúrate de que este archivo exista

@Injectable()
export class UsersService {
  async register(email: string, password: string, role: string) {
    const hashed = await bcrypt.hash(password, 10);
    return contentDb.user.create({
      data: {
        email,
        password: hashed,
        role: UserRole.User, // asignamos rol por defecto
      },
    });
  }

  async findByEmail(email: string) {
    return contentDb.user.findUnique({ where: { email } });
  }

  async findAllUsers() {
    return contentDb.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
  }

  async updateRole(userId: number, newRole: UserRole) {
    return contentDb.user.update({
      where: { id: userId },
      data: { role: newRole },
    });
  }
}
