import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodoRepository } from './todos.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [TodosService, TodoRepository, PrismaService],
  controllers: [TodosController],
})
export class TodosModule {}
