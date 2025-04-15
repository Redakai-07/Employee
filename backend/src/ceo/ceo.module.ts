import { Module } from '@nestjs/common';
import { CeoService } from './ceo.service';
import { CeoController } from './ceo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ceo } from './entities/ceo.entity';
import { HrModule } from 'src/hr/hr.module';

@Module({
  controllers: [CeoController],
  providers: [CeoService],
  imports: [TypeOrmModule.forFeature([Ceo]),HrModule]
})
export class CeoModule {}
