import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';

@Injectable()
export class TodoRepository {
  constructor(private prisma: PrismaService) {}

  create(data) {
    return this.prisma.todo.create({ data });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findById(id: string) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: string, data) {
    return this.prisma.todo.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
