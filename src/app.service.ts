import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health() {
    return {
      status: 'ok',
      service: 'quant-service',
      timestamp: Date.now(),
    };
  }
}
