import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCommentDto: CreateCommentDto): Promise<"Başarılı." | "Bu ID kayıtlıdır">;
    findAll(post: number, commenter: string): Promise<"Kayıt Yoktur." | {
        created_at: Date;
        postid: number;
        content: string;
        commentid: number;
        commenter_name: string;
    }[]>;
    findOne(id: number): Promise<"Kayıt Yoktur." | {
        created_at: Date;
        postid: number;
        content: string;
        commentid: number;
        commenter_name: string;
    }[]>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: number): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
