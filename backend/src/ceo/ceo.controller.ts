import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CeoService } from './ceo.service';
import { CreateCeoDto } from './dto/create-ceo.dto';
import { UpdateCeoDto } from './dto/update-ceo.dto';
import { CreateHrDto } from 'src/hr/dto/create-hr.dto';

// localhost:4000/ceo
@Controller('ceo')
export class CeoController {
  constructor(private readonly ceoService: CeoService) {}


  // Login
  // localhost:4000/ceo/login
  @Post('login')
  login(@Body() Body:{email:string,password:string}){
    return this.ceoService.logIn(Body.email,Body.password);
  }

  // Create HR
  // localhost:4000/ceo/hr
  @Post('hr')
  create(@Body() createHrDto: CreateHrDto) {
    return this.ceoService.create(createHrDto);
  }

  // Get ALL HRs
  // localhost:4000/ceo/hrs
  @Get('hrs')
  findAll() {
    return this.ceoService.findAll();
  }

  // Update CEO Credentials
  // localhost:4000/ceo/1
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCeoDto: UpdateCeoDto) {
    return this.ceoService.update(+id, updateCeoDto);
  }

  // Delete HR with Id
  // localhost:4000/ceo/hr/paramId
  @Delete('hr/:id')
  remove(@Param('id') id: string) {
    return this.ceoService.remove(+id);
  }
}
