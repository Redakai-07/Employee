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
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("./entities/employee.entity");
const typeorm_2 = require("typeorm");
let EmployeesService = class EmployeesService {
    empRepo;
    constructor(empRepo) {
        this.empRepo = empRepo;
    }
    async create(createEmployeeDto) {
        const emp = await this.empRepo.find({ where: { email: createEmployeeDto.email } });
        if (emp.length > 0) {
            return "User already exists !!!";
        }
        const newEmp = this.empRepo.create(createEmployeeDto);
        await this.empRepo.save(newEmp);
        return 'New Employee has been added to the database !!';
    }
    async findAll() {
        const ids = await this.empRepo.find();
        return ids;
    }
    async findOne(id) {
        const emp = await this.empRepo.findOne({ where: { id } });
        if (!emp) {
            return `Employee with id ${id} not found`;
        }
        return emp;
    }
    async update(id, updateEmployeeDto) {
        const emp = await this.empRepo.findOne({ where: { id } });
        if (!emp) {
            return `Employee with id ${id} Not found`;
        }
        const updatedemp = this.empRepo.merge(emp, updateEmployeeDto);
        try {
            await this.empRepo.save(updatedemp);
            return `Employee details updated successfully`;
        }
        catch (error) {
            throw new common_1.BadRequestException("Invalid Data provided");
        }
    }
    async remove(id) {
        const employee = await this.empRepo.findOne({ where: { id } });
        if (!employee) {
            throw new common_1.BadRequestException("Employee with the given ID don't exist in the database...");
        }
        this.empRepo.remove(employee);
        return `Employee with the given ID: ${id} has been removed successfully !!!`;
    }
    async verify(id) {
        const employee = await this.empRepo.findOne({ where: { id } });
        if (!employee) {
            throw new common_1.BadRequestException("Employee with given ID Does not exist");
        }
        if (employee?.isVerified == true)
            return new common_1.BadRequestException("Employee is Already verified");
        else {
            employee.isVerified = true;
            this.empRepo.save(employee);
            return "Employee got verified successfully!!!";
        }
    }
    async submit(id) {
        const employee = await this.empRepo.findOne({ where: { id } });
        if (!employee)
            throw new common_1.BadRequestException("Employee with given Id doesn't exist...");
        if (employee.isVerified == false)
            throw new common_1.BadRequestException("Employee should be verified first In order to submit");
        if (employee.isSubmitted == true)
            throw new common_1.BadRequestException("Employee ID has been already submitted..");
        employee.isSubmitted = true;
        await this.empRepo.save(employee);
        return `Employee with Id: ${id} has been submitted !!`;
    }
    async findIsVerified() {
        const employees = await this.empRepo.find({ where: { isVerified: true } });
        return employees;
    }
    async findIsSubmitted() {
        const employees = await this.empRepo.find({ where: { isSubmitted: true } });
        return employees;
    }
    async findIsNotVerified() {
        const employees = await this.empRepo.find({ where: { isVerified: false } });
        return employees;
    }
    async findIsNotSubmitted() {
        const employees = await this.empRepo.find({ where: { isSubmitted: false, isVerified: true } });
        return employees;
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeesService);
//# sourceMappingURL=employees.service.js.map