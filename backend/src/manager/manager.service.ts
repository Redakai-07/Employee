import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm';
import { UpdateEmployeeDto } from 'src/employees/dto/update-employee.dto';
import { EmployeesService } from 'src/employees/employees.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ManagerService {

  constructor(
    @InjectRepository(Manager)
    private managerRepo:Repository<Manager>,
    private employeesService:EmployeesService,
    private jwtService:JwtService
  ){}

// Searching the User using email
  async findEmail(email: string): Promise<Manager | null> {
    return await this.managerRepo.findOne({ where: { email } });
}


// Login to Manager to get authentication Token
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


  // Creates a New Manager
  async create(createManagerDto: CreateManagerDto) {
    const manager=await this.managerRepo.findOne({where:{email:createManagerDto.email}})
    if (manager) {
      throw new BadRequestException("Manager with the given email already exists !!!")
    }
    const newManager = this.managerRepo.create(createManagerDto);
    await this.managerRepo.save(newManager);
    return `New Manager has been created !!!`;
  }

  // returns All the managers
  findAll() {
    const managers=this.managerRepo.find();
    return managers;
  }

  // Removes Manager with the given ID
  async remove(id: number, asstId:number) {
    const manager = await this.managerRepo.findOne({where:{id}});
    if (!manager) {
      throw new BadRequestException("Manager with the given ID don't exist...");
    }
    // if(manager.asstHr.id !== asstId){
    //   throw new BadRequestException("You can only remove manager who is under your supervision");
    // }
    await this.managerRepo.remove(manager);
    return `Manager with ID: ${id} has been deleted`;
  }


  // Edit Employee
  async editEmployee(id:number, updateEmployeeDto:UpdateEmployeeDto){
    return await this.employeesService.update(id,updateEmployeeDto);
  }

  // Get All Employees
  async getEmployees(){
    return await this.employeesService.findAll();
  }

  // Delete Employee
  async deleteEmployee(id:number){
    return await this.employeesService.remove(id)
  }
}
