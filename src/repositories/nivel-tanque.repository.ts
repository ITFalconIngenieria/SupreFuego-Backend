import {DefaultCrudRepository} from '@loopback/repository';
import {NivelTanque, NivelTanqueRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NivelTanqueRepository extends DefaultCrudRepository<
  NivelTanque,
  typeof NivelTanque.prototype.Id,
  NivelTanqueRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(NivelTanque, dataSource);
  }
}
