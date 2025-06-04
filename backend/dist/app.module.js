"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const employees_module_1 = require("./employees/employees.module");
const hr_module_1 = require("./hr/hr.module");
const asst_hr_module_1 = require("./asst-hr/asst-hr.module");
const manager_module_1 = require("./manager/manager.module");
const ceo_module_1 = require("./ceo/ceo.module");
const jwt_1 = require("@nestjs/jwt");
const fs = require("fs");
const path = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'employee-vprabhathak04.j.aivencloud.com',
                port: 15043,
                username: 'avnadmin',
                password: 'AVNS_q0eaTQN4WJkxYJNDTpJ',
                database: 'defaultdb',
                ssl: {
                    ca: fs.readFileSync(path.join(__dirname, '..', 'certs', 'ca.pem')).toString(),
                },
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: false,
                autoLoadEntities: true,
            }),
            hr_module_1.HrModule,
            asst_hr_module_1.AsstHrModule,
            manager_module_1.ManagerModule,
            ceo_module_1.CeoModule,
            employees_module_1.EmployeesModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: 'secret',
                signOptions: { expiresIn: '6000s' },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map