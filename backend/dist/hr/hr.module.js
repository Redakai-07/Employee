"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrModule = void 0;
const common_1 = require("@nestjs/common");
const hr_service_1 = require("./hr.service");
const hr_controller_1 = require("./hr.controller");
const hr_entity_1 = require("./entities/hr.entity");
const typeorm_1 = require("@nestjs/typeorm");
const asst_hr_module_1 = require("../asst-hr/asst-hr.module");
const employees_module_1 = require("../employees/employees.module");
let HrModule = class HrModule {
};
exports.HrModule = HrModule;
exports.HrModule = HrModule = __decorate([
    (0, common_1.Module)({
        controllers: [hr_controller_1.HrController],
        providers: [hr_service_1.HrService],
        imports: [typeorm_1.TypeOrmModule.forFeature([hr_entity_1.Hr]), asst_hr_module_1.AsstHrModule, employees_module_1.EmployeesModule],
        exports: [hr_service_1.HrService]
    })
], HrModule);
//# sourceMappingURL=hr.module.js.map