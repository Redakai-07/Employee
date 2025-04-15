"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeoModule = void 0;
const common_1 = require("@nestjs/common");
const ceo_service_1 = require("./ceo.service");
const ceo_controller_1 = require("./ceo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ceo_entity_1 = require("./entities/ceo.entity");
const hr_module_1 = require("../hr/hr.module");
let CeoModule = class CeoModule {
};
exports.CeoModule = CeoModule;
exports.CeoModule = CeoModule = __decorate([
    (0, common_1.Module)({
        controllers: [ceo_controller_1.CeoController],
        providers: [ceo_service_1.CeoService],
        imports: [typeorm_1.TypeOrmModule.forFeature([ceo_entity_1.Ceo]), hr_module_1.HrModule]
    })
], CeoModule);
//# sourceMappingURL=ceo.module.js.map