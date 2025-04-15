import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAsstHrDto } from './dto/create-asst-hr.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AsstHr } from './entities/asst-hr.entity';
import { Repository } from 'typeorm';
import { ManagerService } from 'src/manager/manager.service';
import { CreateManagerDto } from 'src/manager/dto/create-manager.dto';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from 'src/employees/employees.service';

@Injectable()
export class AsstHrService {

constructor(
  @InjectRepository(AsstHr)
  private asstRepo:Repository<AsstHr>,
  private managerService:ManagerService,
  private jwtService:JwtService,
  private empService:EmployeesService,
){}

// Searching the User using email
  async findEmail(email: string): Promise<AsstHr | null> {
    return await this.asstRepo.findOne({ where: { email } });
}




// Login to Manager to get authentication Token
async logIn(email: string, password: string): Promise<{ access_token: string, asstHrId:number }> {
  const user = await this.findEmail(email);
  if (!user || user['password'] !== password) {
      throw new UnauthorizedException("Entered User is not Authorised to Login..");
  }
  const payload = { sub: user.id, email: user.email };
  return {
      access_token: await this.jwtService.signAsync(payload),
      asstHrId: user.id
  };
}



// Creates a new Asst HR
  async create(createAsstHrDto: CreateAsstHrDto) {
    const asst=await this.asstRepo.findOne({where:{email:createAsstHrDto.email}});
    if(asst){
      return `Asst HR wih the given email already exists...`
    }
    const newasst = this.asstRepo.create(createAsstHrDto);
    this.asstRepo.save(newasst);
    return 'New AsstHR has been created !!';
  }

  // To Get All asstHRs by id
  async findAll(id:number) {
    const asstHRs = this.asstRepo.find({ where: { hr: { id } } });
    return asstHRs;
  }


  // To remove asstHR by ID
  async remove(id: number) {
    const asst =await this.asstRepo.findOne({where:{id}});

    if (!asst) {
      return `Assisstant HR with id ${id} is not found`
    }
    this.asstRepo.remove(asst);
    return `Assisstant HR with id ${id} has been removed`;
  }



  // Creates a new Manager
  async createManager(createManagerDto:CreateManagerDto){
    return await this.managerService.create(createManagerDto);
  }

  // Gets All Managers
  getAllManagers(){
    return this.managerService.findAll();
  }

  // Remove Manager with ID
  async removeManager(id:number, asstId:number){
    return await this.managerService.remove(id,asstId);
  }

  // Verify Employee
  async verifyemp(id:number){
    return await this.empService.verify(id);
  }


  // Get Emp Not Verified
  async getEmp(){
    return await this.empService.findIsNotVerified();
  }

}
