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
exports.CeoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const ceo_entity_1 = require("./entities/ceo.entity");
const typeorm_2 = require("@nestjs/typeorm");
const hr_service_1 = require("../hr/hr.service");
const jwt_1 = require("@nestjs/jwt");
let CeoService = class CeoService {
    ceoRepo;
    hrService;
    jwtService;
    constructor(ceoRepo, hrService, jwtService) {
        this.ceoRepo = ceoRepo;
        this.hrService = hrService;
        this.jwtService = jwtService;
    }
    async findEmail(email) {
        return await this.ceoRepo.findOne({ where: { email } });
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
    create(createHrDto) {
        return this.hrService.createHr(createHrDto);
        ;
    }
    findAll() {
        return this.hrService.findAllHr();
    }
    async update(id, updateCeoDto) {
        if (id !== 1)
            throw new common_1.BadRequestException('Only CEO with ID 1 can be updated');
        const ceo = await this.ceoRepo.findOne({ where: { id: 1 } });
        if (!ceo)
            throw new common_1.BadRequestException('CEO not found');
        const updatedCeo = this.ceoRepo.merge(ceo, updateCeoDto);
        await this.ceoRepo.save(updatedCeo);
        return `CEO with ID ${id} has been updated successfully`;
    }
    remove(id) {
        return this.hrService.removeHr(id);
    }
};
exports.CeoService = CeoService;
exports.CeoService = CeoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(ceo_entity_1.Ceo)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        hr_service_1.HrService,
        jwt_1.JwtService])
], CeoService);
//# sourceMappingURL=ceo.service.js.map