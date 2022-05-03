import { PartialType } from '@nestjs/swagger'; //官網更新的資訊
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
}