import { Hr } from "src/hr/entities/hr.entity";
import { Manager } from "src/manager/entities/manager.entity";
export declare class AsstHr {
    id: number;
    email: string;
    password: string;
    hr: Hr;
    manager: Manager;
    role: string;
}
