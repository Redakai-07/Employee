"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCeoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ceo_dto_1 = require("./create-ceo.dto");
class UpdateCeoDto extends (0, mapped_types_1.PartialType)(create_ceo_dto_1.CreateCeoDto) {
}
exports.UpdateCeoDto = UpdateCeoDto;
//# sourceMappingURL=update-ceo.dto.js.map