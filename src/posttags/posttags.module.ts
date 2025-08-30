import { Module } from '@nestjs/common';
import { PosttagsService } from './posttags.service';
import { PosttagsController } from './posttags.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PosttagsController],
  providers: [PosttagsService,PrismaService],
})
export class PosttagsModule {}
