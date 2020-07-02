import {DefaultCrudRepository} from '@loopback/repository';
import {TipoMotor, TipoMotorRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipoMotorRepository extends DefaultCrudRepository<
  TipoMotor,
  typeof TipoMotor.prototype.Id,
  TipoMotorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TipoMotor, dataSource);
  }
}
