import { ApiProperty } from '@nestjs/swagger';


export class CreateTodoDto {

  @ApiProperty({
    type: String,
  })
  public readonly title: string;


  @ApiProperty({
    type: String,

  })
  public readonly description?: string;
}
