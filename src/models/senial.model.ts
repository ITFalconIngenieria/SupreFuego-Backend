import {Entity, model, property} from '@loopback/repository';

@model()
export class Senial extends Entity {
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
  UnidadId: number;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  Etiqueta: string;

  @property({
    type: 'string',
    default: 'localhost',
  })
  Servidor?: string;

  @property({
    type: 'boolean',
    default: 0,
  })
  Fuente?: boolean;

  @property({
    type: 'boolean',
    default: 1,
  })
  Estado?: boolean;


  constructor(data?: Partial<Senial>) {
    super(data);
  }
}

export interface SenialRelations {
  // describe navigational properties here
}

export type SenialWithRelations = Senial & SenialRelations;
