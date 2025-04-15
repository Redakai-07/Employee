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
exports.AsstHrService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const asst_hr_entity_1 = require("./entities/asst-hr.entity");
const typeorm_2 = require("typeorm");
const manager_service_1 = require("../manager/manager.service");
const jwt_1 = require("@nestjs/jwt");
const employees_service_1 = require("../employees/employees.service");
let AsstHrService = class AsstHrService {
    asstRepo;
    managerService;
    jwtService;
    empService;
    constructor(asstRepo, managerService, jwtService, empService) {
        this.asstRepo = asstRepo;
        this.managerService = managerService;
        this.jwtService = jwtService;
        this.empService = empService;
    }
    async findEmail(email) {
        return await this.asstRepo.findOne({ where: { email } });
    }
    async logIn(email, password) {
        const user = await this.findEmail(email);
        if (!user || user['password'] !== password) {
            throw new common_1.UnauthorizedException("Entered User is not Authorised to Login..");
        }
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
            asstHrId: user.id
        };
    }
    async create(createAsstHrDto) {
        const asst = await this.asstRepo.findOne({ where: { email: createAsstHrDto.email } });
        if (asst) {
            return `Asst HR wih the given email already exists...`;
        }
        const newasst = this.asstRepo.create(createAsstHrDto);
        this.asstRepo.save(newasst);
        return 'New AsstHR has been created !!';
    }
    async findAll(id) {
        const asstHRs = this.asstRepo.find({ where: { hr: { id } } });
        return asstHRs;
    }
    async remove(id) {
        const asst = await this.asstRepo.findOne({ where: { id } });
        if (!asst) {
            return `Assisstant HR with id ${id} is not found`;
        }
        this.asstRepo.remove(asst);
        return `Assisstant HR with id ${id} has been removed`;
    }
    async createManager(createManagerDto) {
        return await this.managerService.create(createManagerDto);
    }
    getAllManagers() {
        return this.managerService.findAll();
    }
    async removeManager(id, asstId) {
        return await this.managerService.remove(id, asstId);
    }
    async verifyemp(id) {
        return await this.empService.verify(id);
    }
    async getEmp() {
        return await this.empService.findIsNotVerified();
    }
};
exports.AsstHrService = AsstHrService;
exports.AsstHrService = AsstHrService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asst_hr_entity_1.AsstHr)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        manager_service_1.ManagerService,
        jwt_1.JwtService,
        employees_service_1.EmployeesService])
], AsstHrService);
//# sourceMappingURL=asst-hr.service.js.map