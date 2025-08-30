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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryDto) {
        const now = new Date();
        now.setHours(now.getHours() + 3);
        const a = await this.prisma.category.findMany({ where: { categoryid: createCategoryDto.categoryid } });
        if (JSON.stringify(a) === "[]") {
            await this.prisma.category.create({ data: {
                    categoryid: createCategoryDto.categoryid,
                    name: createCategoryDto.name,
                    created_at: now
                } });
            return "Başarılı.";
        }
        else {
            return "Bu ID kayıtlıdır";
        }
    }
    async findAll(queryparam) {
        switch (queryparam) {
            case undefined:
                const a = await this.prisma.category.findMany({ where: { deleted_at: null } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "true":
                const b = await this.prisma.category.findMany({});
                if (JSON.stringify(b) !== "[]") {
                    return b;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "false":
                const c = await this.prisma.category.findMany({ where: { deleted_at: null } });
                if (JSON.stringify(c) !== "[]") {
                    return c;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "onlyDeleted":
                const d = await this.prisma.category.findMany({ where: { NOT: { deleted_at: null } } });
                if (JSON.stringify(d) !== "[]") {
                    return d;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            default:
                break;
        }
    }
    async findOne(id) {
        const a = await this.prisma.category.findMany({ where: {
                categoryid: id, deleted_at: null
            } }).then();
        if (JSON.stringify(a) !== "[]") {
            return a;
        }
        else {
            return "Kayıt Yoktur.";
        }
    }
    async update(id, updateCategoryDto) {
        const a = await this.prisma.category.findMany({ where: {
                categoryid: id, deleted_at: null
            } }).then();
        const b = await this.prisma.category.findMany({ where: {
                categoryid: updateCategoryDto.categoryid
            } }).then();
        if (JSON.stringify(a) !== "[]" && JSON.stringify(b) === "[]") {
            await this.prisma.category.update({ where: { categoryid: id, deleted_at: null }, data: {
                    categoryid: updateCategoryDto.categoryid,
                    name: updateCategoryDto.name,
                    created_at: updateCategoryDto.created_at
                } });
            return "Güncellendi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
    async remove(id) {
        const a = await this.prisma.category.findMany({ where: {
                categoryid: id
            } }).then();
        const now = new Date();
        now.setHours(now.getHours() + 3);
        if (JSON.stringify(a) !== "[]") {
            await this.prisma.category.update({ where: { categoryid: id }, data: {
                    deleted_at: now
                } });
            return "Silindi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map