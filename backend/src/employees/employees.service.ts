import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee)
    private empRepo:Repository<Employee>
  ){}


// Create new Employee
  async create(createEmployeeDto: CreateEmployeeDto) {
    const emp=await this.empRepo.find({where:{email:createEmployeeDto.email}})
    if (emp.length>0) {
      return "User already exists !!!"
    }
    const newEmp=this.empRepo.create(createEmployeeDto);
    await this.empRepo.save(newEmp);
    return 'New Employee has been added to the database !!';
  }

  // Find All employees
  async findAll() {
    const ids = await this.empRepo.find();
    return ids;
  }

  // Find Employee with an ID
  async findOne(id: number) {
    const emp = await this.empRepo.findOne({ where: { id } });
    if (!emp) {
      return `Employee with id ${id} not found`;
    }
    return emp;
  }



// Update Employee details
  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const emp=await this.empRepo.findOne({where:{id}});
    if(!emp){
      return `Employee with id ${id} Not found`;
    }
    const updatedemp =this.empRepo.merge(emp, updateEmployeeDto)
    try {
      await this.empRepo.save(updatedemp);
      return `Employee details updated successfully`;
    } catch (error) {
      throw new BadRequestException("Invalid Data provided");
    }
  }

  // Remove Employee with ID
  async remove(id: number) {
    const employee=await this.empRepo.findOne({where:{id}});
    if (!employee) {
      throw new BadRequestException("Employee with the given ID don't exist in the database...")
    }
    this.empRepo.remove(employee);
    return `Employee with the given ID: ${id} has been removed successfully !!!`;
  }


  // Verify Employee
  async verify(id:number){
    const employee= await this.empRepo.findOne({where:{id}});
    if (!employee) {
      throw new BadRequestException("Employee with given ID Does not exist")
    }
    if(employee?.isVerified==true)
      return new BadRequestException("Employee is Already verified");
    else{
      employee.isVerified=true;
      this.empRepo.save(employee);
      return "Employee got verified successfully!!!"
    }
  }


  // Submit the employee
  async submit(id:number){
    const employee = await this.empRepo.findOne({where:{id}});
    if (!employee)
      throw new BadRequestException("Employee with given Id doesn't exist...");
    if(employee.isVerified==false)
      throw new BadRequestException("Employee should be verified first In order to submit");
    if(employee.isSubmitted==true)
      throw new BadRequestException("Employee ID has been already submitted..");
    employee.isSubmitted=true;
    await this.empRepo.save(employee);
    return `Employee with Id: ${id} has been submitted !!`;
  }


  // Filter Employee with isVerified
  async findIsVerified(){
    const employees =await this.empRepo.find({where:{isVerified:true}})
    return employees;
  }


  // Filter Employee with isSubmitted
  async findIsSubmitted(){
    const employees= await this.empRepo.find({where:{isSubmitted:true}});
    return employees;
  }

  // Filter Employee with notVerified
  async findIsNotVerified(){
    const employees =await this.empRepo.find({where:{isVerified:false}})
    return employees;
  }

// Filter Employee with isSubmitted
async findIsNotSubmitted(){
  const employees= await this.empRepo.find({where:{isSubmitted:false,isVerified:true}});
  return employees;
}

}
