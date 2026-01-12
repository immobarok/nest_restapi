import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create.dto';

@Controller('todos')
export class TodosController {
  constructor(private service: TodosService) {}
  @Post("create")
  create(@Body() dto: CreateTodoDto) {
    return this.service.create(dto);
  }
  @Get('get-all')
  findAll() {
    return this.service.findAll();
  }
  @Get('get-one/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: CreateTodoDto) {
    return this.service.update(id, dto);
  }
}
