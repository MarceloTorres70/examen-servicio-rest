import { Controller, Get, Query } from '@nestjs/common';
import { CasaService } from './casa.service';
import { Casa } from './interfaces/casa.interfaces';

@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  @Get()
  getCasas(@Query('idCasa') idCasa?: string): Casa[] | { message: string } {
    const result = this.casaService.findAll(idCasa);

    if (typeof result === 'string') {
      return { message: result };
    }

    return result;
  }
}