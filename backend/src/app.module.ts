import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { HrModule } from './hr/hr.module';
import { AsstHrModule } from './asst-hr/asst-hr.module';
import { ManagerModule } from './manager/manager.module';
import { CeoModule } from './ceo/ceo.module';
import { JwtModule } from '@nestjs/jwt';

import * as fs from 'fs';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'employee-vprabhathak04.j.aivencloud.com',
      port: 15043,
      username: 'avnadmin',
      password: 'AVNS_q0eaTQN4WJkxYJNDTpJ',
      database: 'defaultdb',
      ssl: {
        ca: fs.readFileSync(path.join(__dirname, '..', 'certs', 'ca.pem')).toString(),
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    HrModule,
    AsstHrModule,
    ManagerModule,
    CeoModule,
    EmployeesModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
