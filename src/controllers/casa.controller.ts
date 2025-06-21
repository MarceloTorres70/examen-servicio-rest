import { Request, Response } from 'express';
import { casas } from '../models/Casa.js';

export const getCasa = (req: Request, res: Response) => {
  const idCasa = req.query.idCasa as string;

  if (!idCasa) {
    return res.status(200).json(casas);
  }

  const casaFiltrada = casas.filter(casa => casa.id === parseInt(idCasa));

  if (casaFiltrada.length === 0) {
    return res.status(404).send("No se encuentra");
  }

  return res.status(200).json(casaFiltrada);
};