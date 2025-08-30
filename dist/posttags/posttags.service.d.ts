import { CreatePosttagDto } from './dto/create-posttag.dto';
import { PrismaService } from 'src/prisma.service';
export declare class PosttagsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPosttagDto: CreatePosttagDto, id: number): Promise<"Başarılı." | "Bu gönderiye bu etiket eklidir.Tekrar eklemene gerek yoktur.">;
    remove(createPosttagDto: CreatePosttagDto, id: number): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi." | "Silindi(Gönderiye ait bütün etiketler silinmiştir).">;
}
