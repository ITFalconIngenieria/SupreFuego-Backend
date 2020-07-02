import {DefaultCrudRepository} from '@loopback/repository';
import {SetPoint, SetPointRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SetPointRepository extends DefaultCrudRepository<
  SetPoint,
  typeof SetPoint.prototype.Id,
  SetPointRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(SetPoint, dataSource);
  }
}
