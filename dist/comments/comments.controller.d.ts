import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<"Başarılı." | "Bu ID kayıtlıdır">;
    findAll(post: number, commenter: string): Promise<"Kayıt Yoktur." | {
        created_at: Date;
        postid: number;
        content: string;
        commentid: number;
        commenter_name: string;
    }[]>;
    findOne(id: string): Promise<"Kayıt Yoktur." | {
        created_at: Date;
        postid: number;
        content: string;
        commentid: number;
        commenter_name: string;
    }[]>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: string): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
