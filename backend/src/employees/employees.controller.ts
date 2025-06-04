import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
// localhost:4000/employees
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  // Creates new Employee
  // localhost:4000/employees
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  // Gets all Employees
  // localhost:4000/employees
  @Get()
  employees(){
    return this.employeesService.findAll();
  }

  @Get(':id')
  employee(@Param('id') id:string){
    return this.employeesService.findOne(+id);
  }
}
