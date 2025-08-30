import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): Promise<"Başarılı." | "Bu ID kayıtlıdır">;
    findAll(showDeleted: string, category: number, status: string, tags: string): Promise<"Kayıt Yoktur." | {
        categoryid: number;
        created_at: Date;
        deleted_at: Date | null;
        postid: number;
        title: string;
        content: string;
        published_at: Date | null;
    }[] | undefined>;
    findOne(id: number): Promise<"Kayıt Yoktur." | {
        categoryid: number;
        created_at: Date;
        deleted_at: Date | null;
        postid: number;
        title: string;
        content: string;
        published_at: Date | null;
    }[]>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: number): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
