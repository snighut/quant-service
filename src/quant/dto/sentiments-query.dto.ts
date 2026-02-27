import { Transform } from 'class-transformer';
import { IsArray, ArrayNotEmpty, IsString, Matches } from 'class-validator';

export class SentimentsQueryDto {
  @Transform(({ value }) => {
    if (typeof value !== 'string') return [];
    return value
      .split(',')
      .map((symbol: string) => symbol.trim().toUpperCase())
      .filter(Boolean);
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @Matches(/^[A-Z]{1,6}$/, { each: true })
  symbols!: string[];
}
