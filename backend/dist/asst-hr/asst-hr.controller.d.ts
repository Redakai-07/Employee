import { AsstHrService } from './asst-hr.service';
import { CreateManagerDto } from 'src/manager/dto/create-manager.dto';
export declare class AsstHrController {
    private readonly asstHrService;
    constructor(asstHrService: AsstHrService);
    login(Body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        asstHrId: number;
    }>;
    create(createManagerDto: CreateManagerDto): Promise<string>;
    findAll(): Promise<import("../manager/entities/manager.entity").Manager[]>;
    remove(id: string, body: {
        asstId: string;
    }): Promise<string>;
    verify(id: string): Promise<import("@nestjs/common").BadRequestException | "Employee got verified successfully!!!">;
    getEmp(): Promise<import("../employees/entities/employee.entity").Employee[]>;
}
