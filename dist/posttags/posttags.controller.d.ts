import { PosttagsService } from './posttags.service';
import { CreatePosttagDto } from './dto/create-posttag.dto';
export declare class PosttagsController {
    private readonly posttagsService;
    constructor(posttagsService: PosttagsService);
    create(id: string, createPosttagDto: CreatePosttagDto): Promise<"Başarılı." | "Bu gönderiye bu etiket eklidir.Tekrar eklemene gerek yoktur.">;
    remove(id: string, createPosttagDto: CreatePosttagDto): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi." | "Silindi(Gönderiye ait bütün etiketler silinmiştir).">;
}
