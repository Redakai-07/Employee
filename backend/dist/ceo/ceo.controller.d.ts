import { CeoService } from './ceo.service';
import { UpdateCeoDto } from './dto/update-ceo.dto';
import { CreateHrDto } from 'src/hr/dto/create-hr.dto';
export declare class CeoController {
    private readonly ceoService;
    constructor(ceoService: CeoService);
    login(Body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    create(createHrDto: CreateHrDto): Promise<string>;
    findAll(): Promise<import("../hr/entities/hr.entity").Hr[]>;
    update(id: string, updateCeoDto: UpdateCeoDto): Promise<string>;
    remove(id: string): Promise<string>;
}
