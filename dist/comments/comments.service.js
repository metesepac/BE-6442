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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CommentsService = class CommentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCommentDto) {
        const now = new Date();
        now.setHours(now.getHours() + 3);
        const a = await this.prisma.comment.findMany({ where: { commentid: createCommentDto.commentid } });
        if (JSON.stringify(a) === "[]") {
            await this.prisma.comment.create({ data: {
                    commentid: createCommentDto.commentid,
                    commenter_name: createCommentDto.commenter_name,
                    created_at: now,
                    content: createCommentDto.content,
                    postid: createCommentDto.postid
                } });
            return "Başarılı.";
        }
        else {
            return "Bu ID kayıtlıdır";
        }
    }
    async findAll(post, commenter) {
        let postid;
        if (post !== undefined) {
            postid = parseInt(post.toString());
        }
        else {
            postid = undefined;
        }
        const a = await this.prisma.comment.findMany({ where: { postid: postid, commenter_name: commenter } });
        if (JSON.stringify(a) !== "[]") {
            return a;
        }
        else {
            return "Kayıt Yoktur.";
        }
    }
    async findOne(id) {
        const a = await this.prisma.comment.findMany({ where: {
                commentid: id
            } }).then();
        if (JSON.stringify(a) !== "[]") {
            return a;
        }
        else {
            return "Kayıt Yoktur.";
        }
    }
    async update(id, updateCommentDto) {
        const a = await this.prisma.comment.findMany({ where: {
                commentid: id
            } }).then();
        const b = await this.prisma.comment.findMany({ where: {
                commentid: updateCommentDto.commentid
            } }).then();
        if (JSON.stringify(a) !== "[]" && JSON.stringify(b) === "[]") {
            await this.prisma.comment.update({ where: { commentid: id }, data: {
                    commentid: updateCommentDto.commentid,
                    commenter_name: updateCommentDto.commenter_name,
                    created_at: updateCommentDto.created_at,
                    content: updateCommentDto.content,
                    postid: updateCommentDto.postid
                } });
            return "Güncellendi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
    async remove(id) {
        const a = await this.prisma.comment.findMany({ where: {
                commentid: id
            } }).then();
        if (JSON.stringify(a) !== "[]") {
            await this.prisma.comment.delete({ where: { commentid: id } });
            return "Silindi.";
        }
        else {
            return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır.";
        }
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map