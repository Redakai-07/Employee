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
exports.Ceo = void 0;
const typeorm_1 = require("typeorm");
let Ceo = class Ceo {
    id;
    email;
    password;
    role;
};
exports.Ceo = Ceo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ceo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], Ceo.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], Ceo.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
        default: "ceo"
    }),
    __metadata("design:type", String)
], Ceo.prototype, "role", void 0);
exports.Ceo = Ceo = __decorate([
    (0, typeorm_1.Entity)()
], Ceo);
//# sourceMappingURL=ceo.entity.js.map