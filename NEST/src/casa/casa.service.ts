import { Injectable } from '@nestjs/common';
import { Casa } from './interfaces/casa.interfaces';

@Injectable()
export class CasaService {
  private casas: Casa[] = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  findAll(idCasa?: string): Casa[] | string {
    if (!idCasa) return this.casas;

    const casaId = parseInt(idCasa);
    const casa = this.casas.find(c => c.id === casaId);

    if (!casa) return 'No se encuentra';
    return [casa];
  }
}
