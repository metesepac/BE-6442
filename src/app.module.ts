import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { TagsModule } from './tags/tags.module';
import { PrismaService } from './prisma.service';
import { PosttagsModule } from './posttags/posttags.module';
@Module({
  imports: [CategoriesModule, PostsModule, CommentsModule, TagsModule, PosttagsModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {

}
