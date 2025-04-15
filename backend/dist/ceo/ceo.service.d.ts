import { UpdateCeoDto } from './dto/update-ceo.dto';
import { Repository } from 'typeorm';
import { Ceo } from './entities/ceo.entity';
import { HrService } from 'src/hr/hr.service';
import { CreateHrDto } from 'src/hr/dto/create-hr.dto';
import { JwtService } from '@nestjs/jwt';
export declare class CeoService {
    private ceoRepo;
    private hrService;
    private jwtService;
    constructor(ceoRepo: Repository<Ceo>, hrService: HrService, jwtService: JwtService);
    findEmail(email: string): Promise<Ceo | null>;
    logIn(email: string, password: string): Promise<{
        access_token: string;
    }>;
    create(createHrDto: CreateHrDto): Promise<string>;
    findAll(): Promise<import("../hr/entities/hr.entity").Hr[]>;
    update(id: number, updateCeoDto: UpdateCeoDto): Promise<string>;
    remove(id: number): Promise<string>;
}
