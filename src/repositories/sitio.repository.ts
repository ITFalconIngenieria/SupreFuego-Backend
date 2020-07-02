import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Sitio, SitioRelations, Empresa} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {EmpresaRepository} from './empresa.repository';

export class SitioRepository extends DefaultCrudRepository<
  Sitio,
  typeof Sitio.prototype.Id,
  SitioRelations
> {

  public readonly Empresa: BelongsToAccessor<Empresa, typeof Sitio.prototype.Id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>,
  ) {
    super(Sitio, dataSource);
    this.Empresa = this.createBelongsToAccessorFor('Empresa', empresaRepositoryGetter,);
    this.registerInclusionResolver('Empresa', this.Empresa.inclusionResolver);
  }
}
