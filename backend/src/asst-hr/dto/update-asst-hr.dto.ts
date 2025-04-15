import { PartialType } from '@nestjs/mapped-types';
import { CreateAsstHrDto } from './create-asst-hr.dto';

export class UpdateAsstHrDto extends PartialType(CreateAsstHrDto) {}
