import {Entity, model, property} from '@loopback/repository';

@model()
export class Unidad extends Entity {
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
  CuartoBombaId: number;

  @property({
    type: 'number',
    required: true,
  })
  TipoMotorId: number;

  @property({
    type: 'string',
  })
  Marca?: string;

  @property({
    type: 'string',
  })
  Modelo?: string;

  @property({
    type: 'number',
    required: true,
  })
  GMP: number;

  @property({
    type: 'number',
    required: true,
  })
  PSI: number;

  @property({
    type: 'number',
    required: true,
  })
  HP: number;

  @property({
    type: 'number',
    required: true,
  })
  RPM: number;

  @property({
    type: 'boolean',
    default: 1,
  })
  Estado?: boolean;


  constructor(data?: Partial<Unidad>) {
    super(data);
  }
}

export interface UnidadRelations {
  // describe navigational properties here
}

export type UnidadWithRelations = Unidad & UnidadRelations;
