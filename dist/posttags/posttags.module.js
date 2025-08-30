"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosttagsModule = void 0;
const common_1 = require("@nestjs/common");
const posttags_service_1 = require("./posttags.service");
const posttags_controller_1 = require("./posttags.controller");
const prisma_service_1 = require("../prisma.service");
let PosttagsModule = class PosttagsModule {
};
exports.PosttagsModule = PosttagsModule;
exports.PosttagsModule = PosttagsModule = __decorate([
    (0, common_1.Module)({
        controllers: [posttags_controller_1.PosttagsController],
        providers: [posttags_service_1.PosttagsService, prisma_service_1.PrismaService],
    })
], PosttagsModule);
//# sourceMappingURL=posttags.module.js.map