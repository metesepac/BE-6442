import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
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
    findOne(id: string): Promise<"Kayıt Yoktur." | {
        categoryid: number;
        created_at: Date;
        deleted_at: Date | null;
        postid: number;
        title: string;
        content: string;
        published_at: Date | null;
    }[]>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: string): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
