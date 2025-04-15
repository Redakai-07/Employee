import { PartialType } from '@nestjs/mapped-types';
import { CreateCeoDto } from './create-ceo.dto';

export class UpdateCeoDto extends PartialType(CreateCeoDto) {}
