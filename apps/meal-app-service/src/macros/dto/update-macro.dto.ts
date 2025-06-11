import { PartialType } from '@nestjs/mapped-types';
import { CreateMacroDto } from './create-macro.dto';

export class UpdateMacroDto extends PartialType(CreateMacroDto) {}
