"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHrDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hr_dto_1 = require("./create-hr.dto");
class UpdateHrDto extends (0, mapped_types_1.PartialType)(create_hr_dto_1.CreateHrDto) {
}
exports.UpdateHrDto = UpdateHrDto;
//# sourceMappingURL=update-hr.dto.js.map