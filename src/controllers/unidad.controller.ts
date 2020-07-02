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
import {Unidad} from '../models';
import {UnidadRepository} from '../repositories';

export class UnidadController {
  constructor(
    @repository(UnidadRepository)
    public unidadRepository : UnidadRepository,
  ) {}

  @post('/unidads', {
    responses: {
      '200': {
        description: 'Unidad model instance',
        content: {'application/json': {schema: getModelSchemaRef(Unidad)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Unidad, {
            title: 'NewUnidad',
            exclude: ['Id'],
          }),
        },
      },
    })
    unidad: Omit<Unidad, 'Id'>,
  ): Promise<Unidad> {
    return this.unidadRepository.create(unidad);
  }

  @get('/unidads/count', {
    responses: {
      '200': {
        description: 'Unidad model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Unidad) where?: Where<Unidad>,
  ): Promise<Count> {
    return this.unidadRepository.count(where);
  }

  @get('/unidads', {
    responses: {
      '200': {
        description: 'Array of Unidad model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Unidad, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Unidad) filter?: Filter<Unidad>,
  ): Promise<Unidad[]> {
    return this.unidadRepository.find(filter);
  }

  @patch('/unidads', {
    responses: {
      '200': {
        description: 'Unidad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Unidad, {partial: true}),
        },
      },
    })
    unidad: Unidad,
    @param.where(Unidad) where?: Where<Unidad>,
  ): Promise<Count> {
    return this.unidadRepository.updateAll(unidad, where);
  }

  @get('/unidads/{id}', {
    responses: {
      '200': {
        description: 'Unidad model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Unidad, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Unidad, {exclude: 'where'}) filter?: FilterExcludingWhere<Unidad>
  ): Promise<Unidad> {
    return this.unidadRepository.findById(id, filter);
  }

  @patch('/unidads/{id}', {
    responses: {
      '204': {
        description: 'Unidad PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Unidad, {partial: true}),
        },
      },
    })
    unidad: Unidad,
  ): Promise<void> {
    await this.unidadRepository.updateById(id, unidad);
  }

  @put('/unidads/{id}', {
    responses: {
      '204': {
        description: 'Unidad PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() unidad: Unidad,
  ): Promise<void> {
    await this.unidadRepository.replaceById(id, unidad);
  }

  @del('/unidads/{id}', {
    responses: {
      '204': {
        description: 'Unidad DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.unidadRepository.deleteById(id);
  }
}
