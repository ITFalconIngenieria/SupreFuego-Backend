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
import {NivelTanque} from '../models';
import {NivelTanqueRepository} from '../repositories';

export class NivelTanqueController {
  constructor(
    @repository(NivelTanqueRepository)
    public nivelTanqueRepository : NivelTanqueRepository,
  ) {}

  @post('/nivel-tanques', {
    responses: {
      '200': {
        description: 'NivelTanque model instance',
        content: {'application/json': {schema: getModelSchemaRef(NivelTanque)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelTanque, {
            title: 'NewNivelTanque',
            exclude: ['Id'],
          }),
        },
      },
    })
    nivelTanque: Omit<NivelTanque, 'Id'>,
  ): Promise<NivelTanque> {
    return this.nivelTanqueRepository.create(nivelTanque);
  }

  @get('/nivel-tanques/count', {
    responses: {
      '200': {
        description: 'NivelTanque model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(NivelTanque) where?: Where<NivelTanque>,
  ): Promise<Count> {
    return this.nivelTanqueRepository.count(where);
  }

  @get('/nivel-tanques', {
    responses: {
      '200': {
        description: 'Array of NivelTanque model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(NivelTanque, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(NivelTanque) filter?: Filter<NivelTanque>,
  ): Promise<NivelTanque[]> {
    return this.nivelTanqueRepository.find(filter);
  }

  @patch('/nivel-tanques', {
    responses: {
      '200': {
        description: 'NivelTanque PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelTanque, {partial: true}),
        },
      },
    })
    nivelTanque: NivelTanque,
    @param.where(NivelTanque) where?: Where<NivelTanque>,
  ): Promise<Count> {
    return this.nivelTanqueRepository.updateAll(nivelTanque, where);
  }

  @get('/nivel-tanques/{id}', {
    responses: {
      '200': {
        description: 'NivelTanque model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(NivelTanque, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(NivelTanque, {exclude: 'where'}) filter?: FilterExcludingWhere<NivelTanque>
  ): Promise<NivelTanque> {
    return this.nivelTanqueRepository.findById(id, filter);
  }

  @patch('/nivel-tanques/{id}', {
    responses: {
      '204': {
        description: 'NivelTanque PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelTanque, {partial: true}),
        },
      },
    })
    nivelTanque: NivelTanque,
  ): Promise<void> {
    await this.nivelTanqueRepository.updateById(id, nivelTanque);
  }

  @put('/nivel-tanques/{id}', {
    responses: {
      '204': {
        description: 'NivelTanque PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() nivelTanque: NivelTanque,
  ): Promise<void> {
    await this.nivelTanqueRepository.replaceById(id, nivelTanque);
  }

  @del('/nivel-tanques/{id}', {
    responses: {
      '204': {
        description: 'NivelTanque DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nivelTanqueRepository.deleteById(id);
  }
}
