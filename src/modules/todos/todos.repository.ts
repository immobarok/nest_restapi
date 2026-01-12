import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTodoDto } from './dto/create.dto';
import { UpdateTodoDto } from './dto/update.dto';

@Injectable()
export class TodoRepository {
  constructor(private prisma: PrismaService) {}
  create(data: CreateTodoDto) {
    return this.prisma.todo.create({ data });
  }
  findAll() {
    return this.prisma.todo.findMany();
  }
  findOne(id: string) {
    return this.prisma.todo.findUnique({ where: { id } });
  }
  update(id: string, data: UpdateTodoDto) {
    return this.prisma.todo.update({ where: { id }, data });
  }
  remove(id: string) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
