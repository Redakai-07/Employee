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
exports.Manager = void 0;
const asst_hr_entity_1 = require("../../asst-hr/entities/asst-hr.entity");
const typeorm_1 = require("typeorm");
let Manager = class Manager {
    id;
    email;
    password;
    asstHr;
    role;
};
exports.Manager = Manager;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Manager.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
    }),
    __metadata("design:type", String)
], Manager.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
    }),
    __metadata("design:type", String)
], Manager.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => asst_hr_entity_1.AsstHr, (asstHr) => asstHr.manager),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", asst_hr_entity_1.AsstHr)
], Manager.prototype, "asstHr", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
        default: "manager"
    }),
    __metadata("design:type", String)
], Manager.prototype, "role", void 0);
exports.Manager = Manager = __decorate([
    (0, typeorm_1.Entity)()
], Manager);
//# sourceMappingURL=manager.entity.js.map