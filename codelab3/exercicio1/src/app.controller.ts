import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NumerosDto } from './soma/dto/soma.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Post('soma')
soma(@Body() data: numerosDto):{
  return
}