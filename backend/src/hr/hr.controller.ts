import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HrService } from './hr.service';
import { UpdateHrDto } from './dto/update-hr.dto';
import { CreateAsstHrDto } from 'src/asst-hr/dto/create-asst-hr.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// localhost:4000/hr
@Controller('hr')
export class HrController {
  constructor(private readonly hrService: HrService) {}

  // Login to HR
  // localhost:4000/hr/login
  @Post('login')
  login(@Body() Body:{email:string,password:string}){
    return this.hrService.login(Body.email,Body.password);
  }
  


  // Update the HR Credentials
  // localhost:4000/paramId
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHrDto: UpdateHrDto) {
    return this.hrService.update(+id, updateHrDto);
  }

  // Create AsstHR
  // localhost:4000/hr/asstHr
  @UseGuards(JwtAuthGuard)
  @Post("asstHr")
  create(@Body() createAsstHrDto:CreateAsstHrDto){
    return this.hrService.create(createAsstHrDto);
  }

  // Delete AsstHR By ID
  // localhost:4000/hr/id
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hrService.remove(+id);
  }

  // Get AsstHRs
  // localhost:4000/hr/find/paramId
  @UseGuards(JwtAuthGuard)
  @Get("find/:id")
  find(@Param('id') id:string){
    return this.hrService.find(+id);
  }


  // Submit Employee
  // localhost:4000/hr/submit/employee/paramId
  @UseGuards(JwtAuthGuard)
  @Post('/submit/employee/:id')
  submit(@Param('id') id:string){
    return this.hrService.submit(+id);
  }


  // Get Unsubmitted Employees
  // localhost:4000/hr/get/employees
  @UseGuards(JwtAuthGuard)
  @Get("/get/employees")
  getemp(){
    return this.hrService.getAllEmp();
  }
}
