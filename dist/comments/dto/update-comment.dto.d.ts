import { CreateCommentDto } from './create-comment.dto';
declare const UpdateCommentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommentDto>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    commentid: number;
    postid: number;
    content: string;
    commenter_name: string;
    created_at: Date;
}
export {};
