import { Module } from '@nestjs/common';
import { AsstHrService } from './asst-hr.service';
import { AsstHrController } from './asst-hr.controller';
import { AsstHr } from './entities/asst-hr.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerModule } from 'src/manager/manager.module';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  controllers: [AsstHrController],
  providers: [AsstHrService],
  imports: [TypeOrmModule.forFeature([AsstHr]),ManagerModule,EmployeesModule],
  exports: [AsstHrService]
})
export class AsstHrModule {}
