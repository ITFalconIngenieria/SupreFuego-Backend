import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Sitio,
  Empresa,
} from '../models';
import {SitioRepository} from '../repositories';

export class SitioEmpresaController {
  constructor(
    @repository(SitioRepository)
    public sitioRepository: SitioRepository,
  ) { }

  @get('/sitios/{id}/empresa', {
    responses: {
      '200': {
        description: 'Empresa belonging to Sitio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empresa)},
          },
        },
      },
    },
  })
  async getEmpresa(
    @param.path.number('id') id: typeof Sitio.prototype.Id,
  ): Promise<Empresa> {
    return this.sitioRepository.Empresa(id);
  }
}
