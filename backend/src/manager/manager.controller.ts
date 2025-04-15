import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { UpdateEmployeeDto } from 'src/employees/dto/update-employee.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// localhost:4000/manager
@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}


// Login
// localhost:4000/manager/login
@Post('login')
login(@Body() Body:{email:string,password:string}){
  return this.managerService.logIn(Body.email,Body.password);
}


  // Edit the Employee
  // localhost:4000/manager/emp/paramId
  @UseGuards(JwtAuthGuard)
  @Patch('/emp/:id')
  edit(@Param('id') id:string, @Body() updateEmployeeDto:UpdateEmployeeDto){
    return this.managerService.editEmployee(+id,updateEmployeeDto);
  }

  // Get Employees
  // localhost:4000/manager/emp
  @UseGuards(JwtAuthGuard)
  @Get('/emp')
  getEmp(){
    return this.managerService.getEmployees()
  }


  // Delete Employee by ID
  // localhost:4000/manager/emp/paramID
  @UseGuards(JwtAuthGuard)
  @Delete('/emp/:id')
  deleteEmp(@Param('id') id:string){
    return this.managerService.deleteEmployee(+id);
  }
}
