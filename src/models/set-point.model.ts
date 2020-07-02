import {Entity, model, property} from '@loopback/repository';

@model()
export class SetPoint extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'number',
    required: true,
  })
  Valor: number;

  @property({
    type: 'boolean',
    default: 1,
  })
  Estado?: boolean;


  constructor(data?: Partial<SetPoint>) {
    super(data);
  }
}

export interface SetPointRelations {
  // describe navigational properties here
}

export type SetPointWithRelations = SetPoint & SetPointRelations;
