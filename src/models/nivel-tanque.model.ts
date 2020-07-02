import {Entity, model, property} from '@loopback/repository';

@model()
export class NivelTanque extends Entity {
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
  SenialId: number;

  @property({
    type: 'number',
    required: true,
  })
  CapacidadMaxima: number;

  @property({
    type: 'number',
    required: true,
  })
  SetPointId: number;

  @property({
    type: 'boolean',
    default: 1,
  })
  Estado?: boolean;


  constructor(data?: Partial<NivelTanque>) {
    super(data);
  }
}

export interface NivelTanqueRelations {
  // describe navigational properties here
}

export type NivelTanqueWithRelations = NivelTanque & NivelTanqueRelations;
