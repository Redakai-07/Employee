import { HrService } from './hr.service';
import { UpdateHrDto } from './dto/update-hr.dto';
import { CreateAsstHrDto } from 'src/asst-hr/dto/create-asst-hr.dto';
export declare class HrController {
    private readonly hrService;
    constructor(hrService: HrService);
    login(Body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        hrId: number;
    }>;
    update(id: string, updateHrDto: UpdateHrDto): Promise<string | import("./entities/hr.entity").Hr>;
    create(createAsstHrDto: CreateAsstHrDto): Promise<"Asst HR wih the given email already exists..." | "New AsstHR has been created !!">;
    remove(id: string): Promise<string>;
    find(id: string): Promise<import("../asst-hr/entities/asst-hr.entity").AsstHr[]>;
    submit(id: string): Promise<string>;
    getemp(): Promise<import("../employees/entities/employee.entity").Employee[]>;
}
