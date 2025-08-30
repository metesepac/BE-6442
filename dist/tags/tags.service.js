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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let TagsService = class TagsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTagDto) {
        const a = await this.prisma.tag.findMany({ where: { tagid: createTagDto.tagid } });
        if (JSON.stringify(a) === "[]") {
            await this.prisma.tag.create({ data: {
                    tagid: createTagDto.tagid,
                    name: createTagDto.name
                } });
            return "Başarılı.";
        }
        else {
            return "Bu ID kayıtlıdır";
        }
    }
    async findAll() {
        const a = await this.prisma.tag.findMany();
        if (JSON.stringify(a) !== "[]") {
            return a;
        }
        else {
            return "Kayıt Yoktur.";
        }
    }
    async findOne(id) {
        const a = await this.prisma.tag.findMany({ where: { tagid: id } });
        if (JSON.stringify(a) !== "[]") {
            return a;
        }
        else {
            return "Kayıt Yoktur.";
        }
    }
    async update(id, updateTagDto) {
        const a = await this.prisma.tag.findMany({ where: {
                tagid: id
            } }).then();
        const b = await this.prisma.tag.findMany({ where: {
                tagid: updateTagDto.tagid
            } }).then();
        if (JSON.stringify(a) !== "[]" && JSON.stringify(b) === "[]" || JSON.stringify(a) === JSON.stringify(b)) {
            await this.prisma.tag.update({ where: { tagid: id }, data: {
                    tagid: updateTagDto.tagid,
                    name: updateTagDto.name
                } });
            return "Güncellendi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
    async remove(id) {
        const a = await this.prisma.tag.findMany({ where: {
                tagid: id
            } }).then();
        if (JSON.stringify(a) !== "[]") {
            await this.prisma.tag.delete({ where: { tagid: id } });
            return "Silindi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
};
exports.TagsService = TagsService;
exports.TagsService = TagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TagsService);
//# sourceMappingURL=tags.service.js.map