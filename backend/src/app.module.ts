import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrModule } from './hr/hr.module';
import { AsstHrModule } from './asst-hr/asst-hr.module';
import { ManagerModule } from './manager/manager.module';
import { CeoModule } from './ceo/ceo.module';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [EmployeesModule,TypeOrmModule.forRoot({
    type:'mysql',
    database:'relation',
    port:3306,
    username:'root',
    password:'root',
    host:'localhost',
    autoLoadEntities:true,
    synchronize:true,
  }), HrModule, AsstHrModule, ManagerModule, CeoModule,JwtModule.register({
    global: true,
    secret: 'secret',
    signOptions: { expiresIn: '6000s' },
  }),],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
