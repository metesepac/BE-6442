import { PrismaService } from './prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    getHello(): Promise<void>;
}
