import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  @IsPositive()
  no: number;
  @IsString()
  name: string;
}
