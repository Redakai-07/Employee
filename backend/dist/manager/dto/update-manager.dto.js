"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManagerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_manager_dto_1 = require("./create-manager.dto");
class UpdateManagerDto extends (0, mapped_types_1.PartialType)(create_manager_dto_1.CreateManagerDto) {
}
exports.UpdateManagerDto = UpdateManagerDto;
//# sourceMappingURL=update-manager.dto.js.map