import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UpdateCeoDto } from './dto/update-ceo.dto';
import { Repository } from 'typeorm';
import { Ceo } from './entities/ceo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HrService } from 'src/hr/hr.service';
import { CreateHrDto } from 'src/hr/dto/create-hr.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CeoService {

  constructor(
    @InjectRepository(Ceo)
    private ceoRepo:Repository<Ceo>,
    private hrService:HrService,
    private jwtService:JwtService,
  ) {}


  // Search CEO Email
  async findEmail(email: string): Promise<Ceo | null> {
      return await this.ceoRepo.findOne({ where: { email } });
  }


  // Login to CEO to get authentication token
  async logIn(email: string, password: string): Promise<{ access_token: string }> {
    const user = await this.findEmail(email);
    if (!user || user['password'] !== password) {
        throw new UnauthorizedException("Entered User is not Authorised to Login..");
    }
    const payload = { sub: user.id, email: user.email };
    return {
        access_token: await this.jwtService.signAsync(payload),
    };
  }


  // Create HR
  create(createHrDto: CreateHrDto) {
    return this.hrService.createHr(createHrDto);;
  }


  // Find HRs
  findAll() {
    return this.hrService.findAllHr();
  }

 
  // Update CEO Credentials
  async update(id: number, updateCeoDto: UpdateCeoDto) {
    if (id !== 1) 
      throw new BadRequestException('Only CEO with ID 1 can be updated');
    const ceo = await this.ceoRepo.findOne({ where: { id: 1 } });
    if (!ceo) 
      throw new BadRequestException('CEO not found');
    const updatedCeo = this.ceoRepo.merge(ceo, updateCeoDto);
    await this.ceoRepo.save(updatedCeo);
    return `CEO with ID ${id} has been updated successfully`;
  }


  // Remove HR By Id
  remove(id: number) {
    return this.hrService.removeHr(id);
  }
}
