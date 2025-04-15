import { ManagerService } from './manager.service';
import { UpdateEmployeeDto } from 'src/employees/dto/update-employee.dto';
export declare class ManagerController {
    private readonly managerService;
    constructor(managerService: ManagerService);
    login(Body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    edit(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<string>;
    getEmp(): Promise<import("../employees/entities/employee.entity").Employee[]>;
    deleteEmp(id: string): Promise<string>;
}
