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
exports.AsstHrController = void 0;
const common_1 = require("@nestjs/common");
const asst_hr_service_1 = require("./asst-hr.service");
const create_manager_dto_1 = require("../manager/dto/create-manager.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AsstHrController = class AsstHrController {
    asstHrService;
    constructor(asstHrService) {
        this.asstHrService = asstHrService;
    }
    login(Body) {
        return this.asstHrService.logIn(Body.email, Body.password);
    }
    create(createManagerDto) {
        return this.asstHrService.createManager(createManagerDto);
    }
    findAll() {
        return this.asstHrService.getAllManagers();
    }
    remove(id, body) {
        return this.asstHrService.removeManager(+id, +body.asstId);
    }
    verify(id) {
        return this.asstHrService.verifyemp(+id);
    }
    getEmp() {
        return this.asstHrService.getEmp();
    }
};
exports.AsstHrController = AsstHrController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsstHrController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manager_dto_1.CreateManagerDto]),
    __metadata("design:returntype", void 0)
], AsstHrController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AsstHrController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AsstHrController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/verify/employee/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AsstHrController.prototype, "verify", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/get/employees'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AsstHrController.prototype, "getEmp", null);
exports.AsstHrController = AsstHrController = __decorate([
    (0, common_1.Controller)('asst-hr'),
    __metadata("design:paramtypes", [asst_hr_service_1.AsstHrService])
], AsstHrController);
//# sourceMappingURL=asst-hr.controller.js.map