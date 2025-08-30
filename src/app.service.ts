import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './categories/dto/create-category.dto';
import { PrismaService } from './prisma.service';


@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello() {

  }
}
