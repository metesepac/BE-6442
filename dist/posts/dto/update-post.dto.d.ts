import { CreatePostDto } from './create-post.dto';
declare const UpdatePostDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePostDto>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
    postid: number;
    categoryid: number;
    title: string;
    content: string;
    created_at: Date;
    published_at: Date;
    deleted_at: Date;
}
export {};
