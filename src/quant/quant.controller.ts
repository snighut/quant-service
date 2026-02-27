import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { SentimentsQueryDto } from './dto/sentiments-query.dto';
import { QuantService, SentimentEntry } from './quant.service';

@Controller('quant')
export class QuantController {
  constructor(private readonly quantService: QuantService) {}

  @Get('sentiments')
  async sentiments(
    @Query() query: SentimentsQueryDto,
  ): Promise<{ timestamp: number; data: Record<string, SentimentEntry[]> }> {
    if (!query.symbols || query.symbols.length === 0) {
      throw new BadRequestException('No valid symbols provided');
    }

    const symbols = [...new Set(query.symbols)].slice(0, 20);
    const data = await this.quantService.getSentiments(symbols);

    return {
      timestamp: Date.now(),
      data,
    };
  }
}
