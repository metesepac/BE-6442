"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePosttagDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_posttag_dto_1 = require("./create-posttag.dto");
class UpdatePosttagDto extends (0, mapped_types_1.PartialType)(create_posttag_dto_1.CreatePosttagDto) {
}
exports.UpdatePosttagDto = UpdatePosttagDto;
//# sourceMappingURL=update-posttag.dto.js.map