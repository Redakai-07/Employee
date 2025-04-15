import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UpdateHrDto } from './dto/update-hr.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hr } from './entities/hr.entity';
import { Repository } from 'typeorm';
import { CreateAsstHrDto } from 'src/asst-hr/dto/create-asst-hr.dto';
import { AsstHrService } from 'src/asst-hr/asst-hr.service';
import { CreateHrDto } from './dto/create-hr.dto';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from 'src/employees/employees.service';

@Injectable()
export class HrService {

  constructor(
    @InjectRepository(Hr)
    private hrRepo:Repository<Hr>,
    private asstService:AsstHrService,
    private jwtService:JwtService,
    private empService:EmployeesService,
  ){}

  // Searching the User using email
    async findEmail(email: string): Promise<Hr | null> {
      return await this.hrRepo.findOne({ where: { email } });
  }

// Login to HR
async login(email:string, password:string): Promise<{access_token:string, hrId: number}>{
  const user = await this.findEmail(email);
    if (!user || user['password'] !== password) {
        throw new UnauthorizedException("Entered User is not Authorised to Login..");
    }
    const payload = { sub: user.id, email: user.email };
    return {
        access_token: await this.jwtService.signAsync(payload),
        hrId: user.id
    };
}






  // Update HR Credentials
 async update(id: number, updateHrDto: UpdateHrDto) {
    const hr=await this.hrRepo.findOne({where:{id}});
    if(!hr)
      return `HR with id ${id} is not in the database :(`;
    const updatedHr = this.hrRepo.merge(hr, updateHrDto);
    
    try {
        return await this.hrRepo.save(updatedHr);
    } catch (error) {
        throw new BadRequestException('Invalid data provided');
    }
  }




  // Create HR 
  async createHr(createHrDto:CreateHrDto){
    const hr=await this.hrRepo.findOne({where:{email:createHrDto.email}})
    if(hr)
      throw new BadRequestException("Hr with given email already exists !!");
    const newHr=this.hrRepo.create(createHrDto);
    this.hrRepo.save(newHr);
    return `New HR has been added to the database`;
  }


  // Get All HRs
  findAllHr(){
    return this.hrRepo.find();
  }


  // Delete HR By Id
  async removeHr(id:number){
    const hr =await this.hrRepo.findOne({where:{id}});
    if (!hr) {
      return `HR with id ${id} is not found`
    }
    this.hrRepo.remove(hr);
    return `HR with id ${id} has been removed`;
  }
    

  // Create AsstHR 
  async create(createAsstHrDto:CreateAsstHrDto){
      return await this.asstService.create(createAsstHrDto);
    }

  
    // Delete AsstHR by ID
  async remove(id: number){
      return await this.asstService.remove(id);
    }


    // Get All AsstHRs 
  find(id:number){
      return this.asstService.findAll(id);
    }


    // Submit Employee
    async submit(id:number){
      return await this.empService.submit(id);
    }

    // Get Unsubmitted Employees
    async getAllEmp(){
      return await this.empService.findIsNotSubmitted();
    }
  
}
