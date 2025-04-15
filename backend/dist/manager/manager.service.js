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
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const manager_entity_1 = require("./entities/manager.entity");
const typeorm_2 = require("typeorm");
const employees_service_1 = require("../employees/employees.service");
const jwt_1 = require("@nestjs/jwt");
let ManagerService = class ManagerService {
    managerRepo;
    employeesService;
    jwtService;
    constructor(managerRepo, employeesService, jwtService) {
        this.managerRepo = managerRepo;
        this.employeesService = employeesService;
        this.jwtService = jwtService;
    }
    async findEmail(email) {
        return await this.managerRepo.findOne({ where: { email } });
    }
    async logIn(email, password) {
        const user = await this.findEmail(email);
        if (!user || user['password'] !== password) {
            throw new common_1.UnauthorizedException("Entered User is not Authorised to Login..");
        }
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async create(createManagerDto) {
        const manager = await this.managerRepo.findOne({ where: { email: createManagerDto.email } });
        if (manager) {
            throw new common_1.BadRequestException("Manager with the given email already exists !!!");
        }
        const newManager = this.managerRepo.create(createManagerDto);
        await this.managerRepo.save(newManager);
        return `New Manager has been created !!!`;
    }
    findAll() {
        const managers = this.managerRepo.find();
        return managers;
    }
    async remove(id, asstId) {
        const manager = await this.managerRepo.findOne({ where: { id } });
        if (!manager) {
            throw new common_1.BadRequestException("Manager with the given ID don't exist...");
        }
        await this.managerRepo.remove(manager);
        return `Manager with ID: ${id} has been deleted`;
    }
    async editEmployee(id, updateEmployeeDto) {
        return await this.employeesService.update(id, updateEmployeeDto);
    }
    async getEmployees() {
        return await this.employeesService.findAll();
    }
    async deleteEmployee(id) {
        return await this.employeesService.remove(id);
    }
};
exports.ManagerService = ManagerService;
exports.ManagerService = ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(manager_entity_1.Manager)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        employees_service_1.EmployeesService,
        jwt_1.JwtService])
], ManagerService);
//# sourceMappingURL=manager.service.js.map