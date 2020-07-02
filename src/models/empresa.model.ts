import {Entity, hasMany, model, property} from '@loopback/repository';
import {Sitio, SitioWithRelations} from './sitio.model';

@model()
export class Empresa extends Entity {
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
  Nombre: string;

  @property({
    type: 'boolean',
    default: 1,
  })
  Estado?: boolean;

  @hasMany(() => Sitio, {keyTo: 'EmpresaId'})
  sitios: Sitio[];

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
  sitio?: SitioWithRelations;
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
