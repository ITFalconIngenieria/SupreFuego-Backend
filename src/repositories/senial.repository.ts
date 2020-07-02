import {DefaultCrudRepository} from '@loopback/repository';
import {Senial, SenialRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SenialRepository extends DefaultCrudRepository<
  Senial,
  typeof Senial.prototype.Id,
  SenialRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Senial, dataSource);
  }
}
