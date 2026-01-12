import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './modules/todos/todos.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TodosModule, PrismaModule],
})
export class AppModule {}
