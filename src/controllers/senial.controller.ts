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
import {Senial} from '../models';
import {SenialRepository} from '../repositories';

export class SenialController {
  constructor(
    @repository(SenialRepository)
    public senialRepository : SenialRepository,
  ) {}

  @post('/senials', {
    responses: {
      '200': {
        description: 'Senial model instance',
        content: {'application/json': {schema: getModelSchemaRef(Senial)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Senial, {
            title: 'NewSenial',
            exclude: ['Id'],
          }),
        },
      },
    })
    senial: Omit<Senial, 'Id'>,
  ): Promise<Senial> {
    return this.senialRepository.create(senial);
  }

  @get('/senials/count', {
    responses: {
      '200': {
        description: 'Senial model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Senial) where?: Where<Senial>,
  ): Promise<Count> {
    return this.senialRepository.count(where);
  }

  @get('/senials', {
    responses: {
      '200': {
        description: 'Array of Senial model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Senial, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Senial) filter?: Filter<Senial>,
  ): Promise<Senial[]> {
    return this.senialRepository.find(filter);
  }

  @patch('/senials', {
    responses: {
      '200': {
        description: 'Senial PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Senial, {partial: true}),
        },
      },
    })
    senial: Senial,
    @param.where(Senial) where?: Where<Senial>,
  ): Promise<Count> {
    return this.senialRepository.updateAll(senial, where);
  }

  @get('/senials/{id}', {
    responses: {
      '200': {
        description: 'Senial model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Senial, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Senial, {exclude: 'where'}) filter?: FilterExcludingWhere<Senial>
  ): Promise<Senial> {
    return this.senialRepository.findById(id, filter);
  }

  @patch('/senials/{id}', {
    responses: {
      '204': {
        description: 'Senial PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Senial, {partial: true}),
        },
      },
    })
    senial: Senial,
  ): Promise<void> {
    await this.senialRepository.updateById(id, senial);
  }

  @put('/senials/{id}', {
    responses: {
      '204': {
        description: 'Senial PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() senial: Senial,
  ): Promise<void> {
    await this.senialRepository.replaceById(id, senial);
  }

  @del('/senials/{id}', {
    responses: {
      '204': {
        description: 'Senial DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.senialRepository.deleteById(id);
  }
}
