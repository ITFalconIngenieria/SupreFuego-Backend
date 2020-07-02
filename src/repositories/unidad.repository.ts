import {DefaultCrudRepository} from '@loopback/repository';
import {Unidad, UnidadRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UnidadRepository extends DefaultCrudRepository<
  Unidad,
  typeof Unidad.prototype.Id,
  UnidadRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Unidad, dataSource);
  }
}
