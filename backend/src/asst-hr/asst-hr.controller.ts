import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { AsstHrService } from './asst-hr.service';
import { CreateManagerDto } from 'src/manager/dto/create-manager.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// localhost:4000/asst-hr
@Controller('asst-hr')
export class AsstHrController {
  constructor(private readonly asstHrService: AsstHrService) {}


  // Login
  // localhost:4000/asst-hr/login
  @Post('login')
  login(@Body() Body:{email:string,password:string}){
    return this.asstHrService.logIn(Body.email,Body.password);
}

  // creates new Manager
  // localhost:4000/asst-hr
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createManagerDto: CreateManagerDto) {
    return this.asstHrService.createManager(createManagerDto);
  }

  // Gets All the managers
  // localhost:4000/asst-hr
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.asstHrService.getAllManagers();
  }


  // Deletes Manager with the given ID
  // localhost:4000/asst-hr/paramId
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Body() body: { asstId: string }) {
    return this.asstHrService.removeManager(+id, +body.asstId);
  }


  // Verifies Employee with the given ID
  // localhost:4000/asst-hr/verify/employee/paramId
  @UseGuards(JwtAuthGuard)
  @Post('/verify/employee/:id')
  verify(@Param('id') id:string){
    return this.asstHrService.verifyemp(+id);
  }



  // Get Unverified Employees
  // localhost:4000/asst-hr/get/employees
  @UseGuards(JwtAuthGuard)
  @Get('/get/employees')
  getEmp(){
    return this.asstHrService.getEmp();
  }


  
}
