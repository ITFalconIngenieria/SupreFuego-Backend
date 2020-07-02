import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Empresa, EmpresaRelations, Sitio} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {SitioRepository} from './sitio.repository';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.Id,
  EmpresaRelations
> {

  public readonly sitios: HasManyRepositoryFactory<Sitio, typeof Empresa.prototype.Id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('SitioRepository') protected sitioRepositoryGetter: Getter<SitioRepository>,
  ) {
    super(Empresa, dataSource);
    this.sitios = this.createHasManyRepositoryFactoryFor('sitios', sitioRepositoryGetter,);
    this.registerInclusionResolver('sitios', this.sitios.inclusionResolver);
  }
}
