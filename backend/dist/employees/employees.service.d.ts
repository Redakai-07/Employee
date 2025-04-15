import { BadRequestException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
export declare class EmployeesService {
    private empRepo;
    constructor(empRepo: Repository<Employee>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<"User already exists !!!" | "New Employee has been added to the database !!">;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<string | Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<string>;
    remove(id: number): Promise<string>;
    verify(id: number): Promise<BadRequestException | "Employee got verified successfully!!!">;
    submit(id: number): Promise<string>;
    findIsVerified(): Promise<Employee[]>;
    findIsSubmitted(): Promise<Employee[]>;
    findIsNotVerified(): Promise<Employee[]>;
    findIsNotSubmitted(): Promise<Employee[]>;
}
