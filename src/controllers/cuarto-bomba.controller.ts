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
import {CuartoBomba} from '../models';
import {CuartoBombaRepository} from '../repositories';

export class CuartoBombaController {
  constructor(
    @repository(CuartoBombaRepository)
    public cuartoBombaRepository : CuartoBombaRepository,
  ) {}

  @post('/cuarto-bombas', {
    responses: {
      '200': {
        description: 'CuartoBomba model instance',
        content: {'application/json': {schema: getModelSchemaRef(CuartoBomba)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuartoBomba, {
            title: 'NewCuartoBomba',
            exclude: ['Id'],
          }),
        },
      },
    })
    cuartoBomba: Omit<CuartoBomba, 'Id'>,
  ): Promise<CuartoBomba> {
    return this.cuartoBombaRepository.create(cuartoBomba);
  }

  @get('/cuarto-bombas/count', {
    responses: {
      '200': {
        description: 'CuartoBomba model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CuartoBomba) where?: Where<CuartoBomba>,
  ): Promise<Count> {
    return this.cuartoBombaRepository.count(where);
  }

  @get('/cuarto-bombas', {
    responses: {
      '200': {
        description: 'Array of CuartoBomba model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CuartoBomba, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CuartoBomba) filter?: Filter<CuartoBomba>,
  ): Promise<CuartoBomba[]> {
    return this.cuartoBombaRepository.find(filter);
  }

  @patch('/cuarto-bombas', {
    responses: {
      '200': {
        description: 'CuartoBomba PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuartoBomba, {partial: true}),
        },
      },
    })
    cuartoBomba: CuartoBomba,
    @param.where(CuartoBomba) where?: Where<CuartoBomba>,
  ): Promise<Count> {
    return this.cuartoBombaRepository.updateAll(cuartoBomba, where);
  }

  @get('/cuarto-bombas/{id}', {
    responses: {
      '200': {
        description: 'CuartoBomba model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CuartoBomba, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CuartoBomba, {exclude: 'where'}) filter?: FilterExcludingWhere<CuartoBomba>
  ): Promise<CuartoBomba> {
    return this.cuartoBombaRepository.findById(id, filter);
  }

  @patch('/cuarto-bombas/{id}', {
    responses: {
      '204': {
        description: 'CuartoBomba PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuartoBomba, {partial: true}),
        },
      },
    })
    cuartoBomba: CuartoBomba,
  ): Promise<void> {
    await this.cuartoBombaRepository.updateById(id, cuartoBomba);
  }

  @put('/cuarto-bombas/{id}', {
    responses: {
      '204': {
        description: 'CuartoBomba PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cuartoBomba: CuartoBomba,
  ): Promise<void> {
    await this.cuartoBombaRepository.replaceById(id, cuartoBomba);
  }

  @del('/cuarto-bombas/{id}', {
    responses: {
      '204': {
        description: 'CuartoBomba DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cuartoBombaRepository.deleteById(id);
  }
}
