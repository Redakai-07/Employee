"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsstHrModule = void 0;
const common_1 = require("@nestjs/common");
const asst_hr_service_1 = require("./asst-hr.service");
const asst_hr_controller_1 = require("./asst-hr.controller");
const asst_hr_entity_1 = require("./entities/asst-hr.entity");
const typeorm_1 = require("@nestjs/typeorm");
const manager_module_1 = require("../manager/manager.module");
const employees_module_1 = require("../employees/employees.module");
let AsstHrModule = class AsstHrModule {
};
exports.AsstHrModule = AsstHrModule;
exports.AsstHrModule = AsstHrModule = __decorate([
    (0, common_1.Module)({
        controllers: [asst_hr_controller_1.AsstHrController],
        providers: [asst_hr_service_1.AsstHrService],
        imports: [typeorm_1.TypeOrmModule.forFeature([asst_hr_entity_1.AsstHr]), manager_module_1.ManagerModule, employees_module_1.EmployeesModule],
        exports: [asst_hr_service_1.AsstHrService]
    })
], AsstHrModule);
//# sourceMappingURL=asst-hr.module.js.map