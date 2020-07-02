import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoMotor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

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


  constructor(data?: Partial<TipoMotor>) {
    super(data);
  }
}

export interface TipoMotorRelations {
  // describe navigational properties here
}

export type TipoMotorWithRelations = TipoMotor & TipoMotorRelations;
