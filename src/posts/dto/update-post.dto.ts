import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    postid:number;
      categoryid :number; 
      title :string;
      content:string   
      created_at :Date 
      published_at :Date
      deleted_at: Date
}
