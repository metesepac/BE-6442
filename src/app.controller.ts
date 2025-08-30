import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCategoryDto } from './categories/dto/create-category.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() createCategoryDto: CreateCategoryDto) {
    return this.appService.getHello();
  }
}
