import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<"Başarılı." | "Bu ID kayıtlıdır">;
    findAll(showDeleted: string): Promise<{
        categoryid: number;
        name: string;
        created_at: Date;
        deleted_at: Date | null;
    }[] | "Kayıt Yoktur." | undefined>;
    findOne(id: string): Promise<{
        categoryid: number;
        name: string;
        created_at: Date;
        deleted_at: Date | null;
    }[] | "Kayıt Yoktur.">;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: string): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
