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
exports.HrService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hr_entity_1 = require("./entities/hr.entity");
const typeorm_2 = require("typeorm");
const asst_hr_service_1 = require("../asst-hr/asst-hr.service");
const jwt_1 = require("@nestjs/jwt");
const employees_service_1 = require("../employees/employees.service");
let HrService = class HrService {
    hrRepo;
    asstService;
    jwtService;
    empService;
    constructor(hrRepo, asstService, jwtService, empService) {
        this.hrRepo = hrRepo;
        this.asstService = asstService;
        this.jwtService = jwtService;
        this.empService = empService;
    }
    async findEmail(email) {
        return await this.hrRepo.findOne({ where: { email } });
    }
    async login(email, password) {
        const user = await this.findEmail(email);
        if (!user || user['password'] !== password) {
            throw new common_1.UnauthorizedException("Entered User is not Authorised to Login..");
        }
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
            hrId: user.id
        };
    }
    async update(id, updateHrDto) {
        const hr = await this.hrRepo.findOne({ where: { id } });
        if (!hr)
            return `HR with id ${id} is not in the database :(`;
        const updatedHr = this.hrRepo.merge(hr, updateHrDto);
        try {
            return await this.hrRepo.save(updatedHr);
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid data provided');
        }
    }
    async createHr(createHrDto) {
        const hr = await this.hrRepo.findOne({ where: { email: createHrDto.email } });
        if (hr)
            throw new common_1.BadRequestException("Hr with given email already exists !!");
        const newHr = this.hrRepo.create(createHrDto);
        this.hrRepo.save(newHr);
        return `New HR has been added to the database`;
    }
    findAllHr() {
        return this.hrRepo.find();
    }
    async removeHr(id) {
        const hr = await this.hrRepo.findOne({ where: { id } });
        if (!hr) {
            return `HR with id ${id} is not found`;
        }
        this.hrRepo.remove(hr);
        return `HR with id ${id} has been removed`;
    }
    async create(createAsstHrDto) {
        return await this.asstService.create(createAsstHrDto);
    }
    async remove(id) {
        return await this.asstService.remove(id);
    }
    find(id) {
        return this.asstService.findAll(id);
    }
    async submit(id) {
        return await this.empService.submit(id);
    }
    async getAllEmp() {
        return await this.empService.findIsNotSubmitted();
    }
};
exports.HrService = HrService;
exports.HrService = HrService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hr_entity_1.Hr)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        asst_hr_service_1.AsstHrService,
        jwt_1.JwtService,
        employees_service_1.EmployeesService])
], HrService);
//# sourceMappingURL=hr.service.js.map