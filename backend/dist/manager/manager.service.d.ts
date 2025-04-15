import { CreateManagerDto } from './dto/create-manager.dto';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm';
import { UpdateEmployeeDto } from 'src/employees/dto/update-employee.dto';
import { EmployeesService } from 'src/employees/employees.service';
import { JwtService } from '@nestjs/jwt';
export declare class ManagerService {
    private managerRepo;
    private employeesService;
    private jwtService;
    constructor(managerRepo: Repository<Manager>, employeesService: EmployeesService, jwtService: JwtService);
    findEmail(email: string): Promise<Manager | null>;
    logIn(email: string, password: string): Promise<{
        access_token: string;
    }>;
    create(createManagerDto: CreateManagerDto): Promise<string>;
    findAll(): Promise<Manager[]>;
    remove(id: number, asstId: number): Promise<string>;
    editEmployee(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<string>;
    getEmployees(): Promise<import("../employees/entities/employee.entity").Employee[]>;
    deleteEmployee(id: number): Promise<string>;
}
