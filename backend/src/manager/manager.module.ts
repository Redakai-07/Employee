import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  controllers: [ManagerController],
  providers: [ManagerService],
  imports: [TypeOrmModule.forFeature([Manager]),EmployeesModule],
  exports: [ManagerService],
})
export class ManagerModule {}
