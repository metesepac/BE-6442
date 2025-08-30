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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PostsService = class PostsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPostDto) {
        const now = new Date();
        now.setHours(now.getHours() + 3);
        const a = await this.prisma.post.findMany({ where: { postid: createPostDto.postid } });
        if (JSON.stringify(a) === "[]") {
            await this.prisma.post.create({ data: {
                    postid: createPostDto.postid,
                    categoryid: createPostDto.categoryid,
                    content: createPostDto.content,
                    title: createPostDto.title,
                    published_at: createPostDto.published_at,
                    created_at: now
                } });
            return "Başarılı.";
        }
        else {
            return "Bu ID kayıtlıdır";
        }
    }
    async findAll(showDeleted, category, status, tags) {
        const switchkey = showDeleted + status + ",";
        let categoryid;
        if (category !== undefined) {
            categoryid = parseInt(category.toString());
        }
        else {
            categoryid = undefined;
        }
        let strpostids = [];
        if (tags !== undefined) {
            let strtagsids = [];
            for (let index = 0; index < tags.split(",").length; index++) {
                strtagsids.push(parseInt(tags.split(",")[index]));
            }
            const postids = await this.prisma.post_tag.findMany({ select: { postid: true }, where: { tagid: { in: strtagsids.map(tagid => tagid) } } });
            for (let index = 0; index < postids.length; index++) {
                strpostids.push(postids[index].postid);
            }
        }
        else {
            const postids = await this.prisma.post.findMany({ select: { postid: true } });
            for (let index = 0; index < postids.length; index++) {
                strpostids.push(postids[index].postid);
            }
        }
        let a = await this.prisma.post.findMany();
        switch (switchkey) {
            case "undefinedpublished,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, published_at: { not: null } } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "truepublished,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, published_at: { not: null } } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "falsepublished,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, deleted_at: null, published_at: { not: null } } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "onlyDeletedpublished,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, published_at: { not: null }, deleted_at: { not: null } } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case ("undefineddraft,"):
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, published_at: null } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "truedraft,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, published_at: null } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "falsedraft,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, deleted_at: null, published_at: null } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "onlyDeleteddraft,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, published_at: null, deleted_at: { not: null } } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case ("undefinedall,"):
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "trueall,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "falseall,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, deleted_at: null } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "onlyDeletedall,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, deleted_at: { not: null } } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "NaN,":
                const b = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid } }).then();
                if (JSON.stringify(b) !== "[]") {
                    return b;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "trueundefined,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "falseundefined,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, deleted_at: null } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
                }
                else {
                    return "Kayıt Yoktur.";
                }
                break;
            case "onlyDeletedundefined,":
                a = await this.prisma.post.findMany({ where: { postid: { in: strpostids.map(postid => postid) }, categoryid: categoryid, deleted_at: { not: null } } });
                if (JSON.stringify(a) !== "[]") {
                    return a;
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
        const a = await this.prisma.post.findMany({ where: {
                postid: id, deleted_at: null
            } }).then();
        if (JSON.stringify(a) !== "[]") {
            return a;
        }
        else {
            return "Kayıt Yoktur.";
        }
    }
    async update(id, updatePostDto) {
        const a = await this.prisma.post.findMany({ where: {
                postid: id, deleted_at: null
            } }).then();
        const b = await this.prisma.post.findMany({ where: {
                postid: updatePostDto.postid
            } }).then();
        if (JSON.stringify(a) !== "[]" && JSON.stringify(b) === "[]") {
            await this.prisma.post.update({ where: { postid: id, deleted_at: null }, data: {
                    postid: updatePostDto.postid,
                    categoryid: updatePostDto.categoryid,
                    content: updatePostDto.content,
                    created_at: updatePostDto.created_at,
                    title: updatePostDto.title,
                    published_at: updatePostDto.published_at
                } });
            return "Güncellendi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
    async remove(id) {
        const a = await this.prisma.post.findMany({ where: {
                postid: id
            } }).then();
        const now = new Date();
        now.setHours(now.getHours() + 3);
        if (JSON.stringify(a) !== "[]") {
            await this.prisma.post.update({ where: { postid: id }, data: {
                    deleted_at: now
                } });
            return "Silindi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
//# sourceMappingURL=posts.service.js.map