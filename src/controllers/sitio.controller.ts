import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Sitio} from '../models';
import {SitioRepository} from '../repositories';

export class SitioController {
  constructor(
    @repository(SitioRepository)
    public sitioRepository : SitioRepository,
  ) {}

  @post('/sitios', {
    responses: {
      '200': {
        description: 'Sitio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sitio)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {
            title: 'NewSitio',
            exclude: ['Id'],
          }),
        },
      },
    })
    sitio: Omit<Sitio, 'Id'>,
  ): Promise<Sitio> {
    return this.sitioRepository.create(sitio);
  }

  @get('/sitios/count', {
    responses: {
      '200': {
        description: 'Sitio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Sitio) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.sitioRepository.count(where);
  }

  @get('/sitios', {
    responses: {
      '200': {
        description: 'Array of Sitio model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Sitio, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Sitio) filter?: Filter<Sitio>,
  ): Promise<Sitio[]> {
    return this.sitioRepository.find(filter);
  }

  @patch('/sitios', {
    responses: {
      '200': {
        description: 'Sitio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {partial: true}),
        },
      },
    })
    sitio: Sitio,
    @param.where(Sitio) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.sitioRepository.updateAll(sitio, where);
  }

  @get('/sitios/{id}', {
    responses: {
      '200': {
        description: 'Sitio model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Sitio, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sitio, {exclude: 'where'}) filter?: FilterExcludingWhere<Sitio>
  ): Promise<Sitio> {
    return this.sitioRepository.findById(id, filter);
  }

  @patch('/sitios/{id}', {
    responses: {
      '204': {
        description: 'Sitio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {partial: true}),
        },
      },
    })
    sitio: Sitio,
  ): Promise<void> {
    await this.sitioRepository.updateById(id, sitio);
  }

  @put('/sitios/{id}', {
    responses: {
      '204': {
        description: 'Sitio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sitio: Sitio,
  ): Promise<void> {
    await this.sitioRepository.replaceById(id, sitio);
  }

  @del('/sitios/{id}', {
    responses: {
      '204': {
        description: 'Sitio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sitioRepository.deleteById(id);
  }
}
