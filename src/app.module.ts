import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './modules/todos/todos.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TodosModule],
})
export class AppModule {}
