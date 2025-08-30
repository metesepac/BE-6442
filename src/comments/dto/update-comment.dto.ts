import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
      commentid:number;
  postid :number; 
  content :string;
  commenter_name :string;   
  created_at :Date
}
