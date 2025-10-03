import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemplosModule } from './ejemplos/ejemplos.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EjemplosModule, UserModule, PostModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
