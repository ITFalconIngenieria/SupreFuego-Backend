import {DefaultCrudRepository} from '@loopback/repository';
import {CuartoBomba, CuartoBombaRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CuartoBombaRepository extends DefaultCrudRepository<
  CuartoBomba,
  typeof CuartoBomba.prototype.Id,
  CuartoBombaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CuartoBomba, dataSource);
  }
}
