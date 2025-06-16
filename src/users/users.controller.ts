// src/users/users.controller.ts
import { Controller, Post, Body, Get, UseGuards, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/auth/roles.enum';
import { UpdateRoleDto } from './dto/update-role.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; role: string; }) {
    return this.usersService.register(body.email, body.password, body.role);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  async findAll() {
    return this.usersService.findAllUsers();
  }

  @Patch(':id/role')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  updateUserRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.usersService.updateRole(id, updateRoleDto.role);
  }
}
