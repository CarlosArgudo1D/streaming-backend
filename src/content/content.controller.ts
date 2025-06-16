import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateContentDto } from './dto/create-content.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/auth/roles.enum';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin, UserRole.Editor)
  @Post()
  create(@Body() body: CreateContentDto) {
    return this.contentService.create(body);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.Admin, UserRole.Editor, UserRole.Viewer)
  findAll() {
    return this.contentService.findAllContents();
  }
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.Admin, UserRole.Editor, UserRole.Viewer)
  @Get('movies')
  getMovies() {
    return this.contentService.findMovies();
  }

  @UseGuards(JwtAuthGuard)
  @Get('series')
  getSeries() {
    return this.contentService.findSeries();
  }
}
