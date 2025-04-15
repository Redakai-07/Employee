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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const class_validator_2 = require("class-validator");
class CreateEmployeeDto {
    fName;
    lName;
    email;
    altEmail;
    mobile;
    altMobile;
    isVerified;
    isSubmitted;
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.MaxLength)(30),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "fName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.MaxLength)(30),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "lName", void 0);
__decorate([
    (0, class_validator_2.MaxLength)(30),
    (0, class_validator_2.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_2.MaxLength)(30),
    (0, class_validator_2.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "altEmail", void 0);
__decorate([
    (0, class_validator_2.Length)(10, 10),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.Matches)(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits" }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_2.IsOptional)(),
    (0, class_validator_2.Length)(10, 10),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.Matches)(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits" }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "altMobile", void 0);
__decorate([
    (0, class_validator_2.IsOptional)(),
    (0, class_validator_2.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateEmployeeDto.prototype, "isVerified", void 0);
__decorate([
    (0, class_validator_2.IsOptional)(),
    (0, class_validator_2.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateEmployeeDto.prototype, "isSubmitted", void 0);
//# sourceMappingURL=create-employee.dto.js.map