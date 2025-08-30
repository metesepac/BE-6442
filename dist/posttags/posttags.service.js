"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosttagsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PosttagsService = class PosttagsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPosttagDto, id) {
        const a = await this.prisma.post_tag.findMany({ where: { postid: id,
                tagid: createPosttagDto.tagid } });
        if (JSON.stringify(a) === "[]") {
            await this.prisma.post_tag.create({ data: {
                    postid: id,
                    tagid: createPosttagDto.tagid
                } });
            return "Başarılı.";
        }
        else {
            return "Bu gönderiye bu etiket eklidir.Tekrar eklemene gerek yoktur.";
        }
    }
    async remove(createPosttagDto, id) {
        if (createPosttagDto !== undefined) {
            const a = await this.prisma.post_tag.findMany({ where: {
                    postid: id, tagid: createPosttagDto.tagid
                } }).then();
            if (JSON.stringify(a) !== "[]") {
                await this.prisma.post_tag.deleteMany({ where: { postid: id, tagid: createPosttagDto.tagid } });
                return "Silindi.";
            }
            else {
                return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
            }
        }
        else {
            const a = await this.prisma.post_tag.findMany({ where: {
                    postid: id
                } }).then();
            if (JSON.stringify(a) !== "[]") {
                await this.prisma.post_tag.deleteMany({ where: { postid: id } });
                return "Silindi(Gönderiye ait bütün etiketler silinmiştir).";
            }
            else {
                return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
            }
        }
    }
};
exports.PosttagsService = PosttagsService;
exports.PosttagsService = PosttagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PosttagsService);
//# sourceMappingURL=posttags.service.js.map