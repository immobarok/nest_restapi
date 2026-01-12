import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoRepository } from './todos.repository';
import { CreateTodoDto } from './dto/create.dto';
import { UpdateTodoDto } from './dto/update.dto';

@Injectable()
export class TodosService {
  constructor(private repo: TodoRepository) {}
  create(dto: CreateTodoDto) {
    return this.repo.create(dto);
  }

  async findAll() {
    return this.repo.findAll();
  }

  async findOne(id: string) {
    const todo = await this.repo.findOne(id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  update(id:string, dto: UpdateTodoDto){
    return this.repo.update(id,dto)
  }
  delete(id:string){
    return this.repo.remove(id)
  }
}


