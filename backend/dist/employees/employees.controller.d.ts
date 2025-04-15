import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<"User already exists !!!" | "New Employee has been added to the database !!">;
    employees(): Promise<import("./entities/employee.entity").Employee[]>;
    employee(id: string): Promise<string | import("./entities/employee.entity").Employee>;
}
