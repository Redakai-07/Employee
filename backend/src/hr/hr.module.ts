import { Module } from '@nestjs/common';
import { HrService } from './hr.service';
import { HrController } from './hr.controller';
import { Hr } from './entities/hr.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsstHrModule } from 'src/asst-hr/asst-hr.module';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  controllers: [HrController],
  providers: [HrService],
  imports: [TypeOrmModule.forFeature([Hr]),AsstHrModule,EmployeesModule],
  exports: [HrService]
})
export class HrModule {}
