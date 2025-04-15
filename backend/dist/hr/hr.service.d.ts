import { UpdateHrDto } from './dto/update-hr.dto';
import { Hr } from './entities/hr.entity';
import { Repository } from 'typeorm';
import { CreateAsstHrDto } from 'src/asst-hr/dto/create-asst-hr.dto';
import { AsstHrService } from 'src/asst-hr/asst-hr.service';
import { CreateHrDto } from './dto/create-hr.dto';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from 'src/employees/employees.service';
export declare class HrService {
    private hrRepo;
    private asstService;
    private jwtService;
    private empService;
    constructor(hrRepo: Repository<Hr>, asstService: AsstHrService, jwtService: JwtService, empService: EmployeesService);
    findEmail(email: string): Promise<Hr | null>;
    login(email: string, password: string): Promise<{
        access_token: string;
        hrId: number;
    }>;
    update(id: number, updateHrDto: UpdateHrDto): Promise<string | Hr>;
    createHr(createHrDto: CreateHrDto): Promise<string>;
    findAllHr(): Promise<Hr[]>;
    removeHr(id: number): Promise<string>;
    create(createAsstHrDto: CreateAsstHrDto): Promise<"Asst HR wih the given email already exists..." | "New AsstHR has been created !!">;
    remove(id: number): Promise<string>;
    find(id: number): Promise<import("../asst-hr/entities/asst-hr.entity").AsstHr[]>;
    submit(id: number): Promise<string>;
    getAllEmp(): Promise<import("../employees/entities/employee.entity").Employee[]>;
}
