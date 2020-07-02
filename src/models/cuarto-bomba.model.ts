import {Entity, model, property} from '@loopback/repository';

@model()
export class CuartoBomba extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'number',
    required: true,
  })
  SitioId: number;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'boolean',
    default: 1,
  })
  Estado?: boolean;


  constructor(data?: Partial<CuartoBomba>) {
    super(data);
  }
}

export interface CuartoBombaRelations {
  // describe navigational properties here
}

export type CuartoBombaWithRelations = CuartoBomba & CuartoBombaRelations;
