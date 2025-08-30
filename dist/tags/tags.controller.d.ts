import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): Promise<"Başarılı." | "Bu ID kayıtlıdır">;
    findAll(): Promise<"Kayıt Yoktur." | {
        name: string;
        tagid: number;
    }[]>;
    findOne(id: string): Promise<"Kayıt Yoktur." | {
        name: string;
        tagid: number;
    }[]>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<"Güncellendi." | "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.">;
    remove(id: string): Promise<"Kayıt Yoktur veya Alanlar tam doldurulmalıdır." | "Silindi.">;
}
