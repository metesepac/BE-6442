import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma.service';
export declare class TagsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTagDto: CreateTagDto): Promise<"Başarılı." | "Bu ID kayıtlıdır">;
    findAll(): Promise<"Kayıt Yoktur." | {
        name: string;
        tagid: number;
    }[]>;
    findOne(id: number): Promise<"Kayıt Yoktur." | {
        name: string;
        tagid: number;
    }[]>;
    update(id: number, updateTagDto: UpdateTagDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: number): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
