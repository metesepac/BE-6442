import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../prisma.service';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<"Başarılı." | "Bu ID kayıtlıdır">;
    findAll(queryparam: string): Promise<{
        categoryid: number;
        name: string;
        created_at: Date;
        deleted_at: Date | null;
    }[] | "Kayıt Yoktur." | undefined>;
    findOne(id: number): Promise<{
        categoryid: number;
        name: string;
        created_at: Date;
        deleted_at: Date | null;
    }[] | "Kayıt Yoktur.">;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: number): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
