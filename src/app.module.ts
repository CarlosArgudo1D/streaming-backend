import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [AuthModule, UsersModule, ContentModule],
  controllers: [AppController],
  providers: [AppService, RolesGuard],
})
export class AppModule {}
