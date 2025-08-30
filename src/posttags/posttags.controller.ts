import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosttagsService } from './posttags.service';
import { CreatePosttagDto } from './dto/create-posttag.dto';
import { UpdatePosttagDto } from './dto/update-posttag.dto';

@Controller('/posts/:id/tags')
export class PosttagsController {
  constructor(private readonly posttagsService: PosttagsService) {}

  @Post()
  create( @Param('id') id: string,@Body() createPosttagDto: CreatePosttagDto) {
    return this.posttagsService.create(createPosttagDto,+id);
  }

    @Delete()
  remove(@Param('id') id: string, @Body() createPosttagDto: CreatePosttagDto) {
    return this.posttagsService.remove(createPosttagDto,+id);
  }

/*   @Get()
  findAll() {
    return this.posttagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posttagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosttagDto: UpdatePosttagDto) {
    return this.posttagsService.update(+id, updatePosttagDto);
  }
 */

}
