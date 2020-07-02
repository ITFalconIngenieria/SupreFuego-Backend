import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Empresa, EmpresaWithRelations} from './empresa.model';

@model()
export class Sitio extends Entity {
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
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'number',
  })
  Latitud?: number;

  @property({
    type: 'number',
  })
  Longitud?: number;

  @property({
    type: 'number',
  })
  Altura?: number;

  @property({
    type: 'boolean',
    default: 1,
  })
  Estado?: boolean;

  @belongsTo(() => Empresa)
  EmpresaId: number;

  constructor(data?: Partial<Sitio>) {
    super(data);
  }
}

export interface SitioRelations {
  // describe navigational properties here
  empresa?: EmpresaWithRelations;
}

export type SitioWithRelations = Sitio & SitioRelations;
