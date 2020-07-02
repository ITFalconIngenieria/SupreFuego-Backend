import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Empresa,
  Sitio,
} from '../models';
import {EmpresaRepository} from '../repositories';

export class EmpresaSitioController {
  constructor(
    @repository(EmpresaRepository) protected empresaRepository: EmpresaRepository,
  ) { }

  @get('/empresas/{id}/sitios', {
    responses: {
      '200': {
        description: 'Array of Empresa has many Sitio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sitio)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Sitio>,
  ): Promise<Sitio[]> {
    return this.empresaRepository.sitios(id).find(filter);
  }

  @post('/empresas/{id}/sitios', {
    responses: {
      '200': {
        description: 'Empresa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sitio)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Empresa.prototype.Id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {
            title: 'NewSitioInEmpresa',
            exclude: ['Id'],
            optional: ['EmpresaId']
          }),
        },
      },
    }) sitio: Omit<Sitio, 'Id'>,
  ): Promise<Sitio> {
    return this.empresaRepository.sitios(id).create(sitio);
  }

  @patch('/empresas/{id}/sitios', {
    responses: {
      '200': {
        description: 'Empresa.Sitio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {partial: true}),
        },
      },
    })
    sitio: Partial<Sitio>,
    @param.query.object('where', getWhereSchemaFor(Sitio)) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.empresaRepository.sitios(id).patch(sitio, where);
  }

  @del('/empresas/{id}/sitios', {
    responses: {
      '200': {
        description: 'Empresa.Sitio DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Sitio)) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.empresaRepository.sitios(id).delete(where);
  }
}
