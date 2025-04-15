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
exports.AsstHr = void 0;
const hr_entity_1 = require("../../hr/entities/hr.entity");
const manager_entity_1 = require("../../manager/entities/manager.entity");
const typeorm_1 = require("typeorm");
let AsstHr = class AsstHr {
    id;
    email;
    password;
    hr;
    manager;
    role;
};
exports.AsstHr = AsstHr;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AsstHr.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 30
    }),
    __metadata("design:type", String)
], AsstHr.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 30
    }),
    __metadata("design:type", String)
], AsstHr.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hr_entity_1.Hr, (hr) => hr.asstHr),
    (0, typeorm_1.JoinColumn)({}),
    __metadata("design:type", hr_entity_1.Hr)
], AsstHr.prototype, "hr", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => manager_entity_1.Manager, (manager) => manager.asstHr),
    __metadata("design:type", manager_entity_1.Manager)
], AsstHr.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
        default: "asstHr"
    }),
    __metadata("design:type", String)
], AsstHr.prototype, "role", void 0);
exports.AsstHr = AsstHr = __decorate([
    (0, typeorm_1.Entity)()
], AsstHr);
//# sourceMappingURL=asst-hr.entity.js.map