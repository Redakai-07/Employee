import { CreateAsstHrDto } from './dto/create-asst-hr.dto';
import { AsstHr } from './entities/asst-hr.entity';
import { Repository } from 'typeorm';
import { ManagerService } from 'src/manager/manager.service';
import { CreateManagerDto } from 'src/manager/dto/create-manager.dto';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from 'src/employees/employees.service';
export declare class AsstHrService {
    private asstRepo;
    private managerService;
    private jwtService;
    private empService;
    constructor(asstRepo: Repository<AsstHr>, managerService: ManagerService, jwtService: JwtService, empService: EmployeesService);
    findEmail(email: string): Promise<AsstHr | null>;
    logIn(email: string, password: string): Promise<{
        access_token: string;
        asstHrId: number;
    }>;
    create(createAsstHrDto: CreateAsstHrDto): Promise<"Asst HR wih the given email already exists..." | "New AsstHR has been created !!">;
    findAll(id: number): Promise<AsstHr[]>;
    remove(id: number): Promise<string>;
    createManager(createManagerDto: CreateManagerDto): Promise<string>;
    getAllManagers(): Promise<import("../manager/entities/manager.entity").Manager[]>;
    removeManager(id: number, asstId: number): Promise<string>;
    verifyemp(id: number): Promise<import("@nestjs/common").BadRequestException | "Employee got verified successfully!!!">;
    getEmp(): Promise<import("../employees/entities/employee.entity").Employee[]>;
}
