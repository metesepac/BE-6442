import { AppService } from './app.service';
import { CreateCategoryDto } from './categories/dto/create-category.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(createCategoryDto: CreateCategoryDto): Promise<void>;
}
