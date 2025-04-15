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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeoController = void 0;
const common_1 = require("@nestjs/common");
const ceo_service_1 = require("./ceo.service");
const update_ceo_dto_1 = require("./dto/update-ceo.dto");
const create_hr_dto_1 = require("../hr/dto/create-hr.dto");
let CeoController = class CeoController {
    ceoService;
    constructor(ceoService) {
        this.ceoService = ceoService;
    }
    login(Body) {
        return this.ceoService.logIn(Body.email, Body.password);
    }
    create(createHrDto) {
        return this.ceoService.create(createHrDto);
    }
    findAll() {
        return this.ceoService.findAll();
    }
    update(id, updateCeoDto) {
        return this.ceoService.update(+id, updateCeoDto);
    }
    remove(id) {
        return this.ceoService.remove(+id);
    }
};
exports.CeoController = CeoController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CeoController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('hr'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hr_dto_1.CreateHrDto]),
    __metadata("design:returntype", void 0)
], CeoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('hrs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CeoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ceo_dto_1.UpdateCeoDto]),
    __metadata("design:returntype", void 0)
], CeoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('hr/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CeoController.prototype, "remove", null);
exports.CeoController = CeoController = __decorate([
    (0, common_1.Controller)('ceo'),
    __metadata("design:paramtypes", [ceo_service_1.CeoService])
], CeoController);
//# sourceMappingURL=ceo.controller.js.map