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
import {SetPoint} from '../models';
import {SetPointRepository} from '../repositories';

export class SetPointController {
  constructor(
    @repository(SetPointRepository)
    public setPointRepository : SetPointRepository,
  ) {}

  @post('/set-points', {
    responses: {
      '200': {
        description: 'SetPoint model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetPoint)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetPoint, {
            title: 'NewSetPoint',
            exclude: ['Id'],
          }),
        },
      },
    })
    setPoint: Omit<SetPoint, 'Id'>,
  ): Promise<SetPoint> {
    return this.setPointRepository.create(setPoint);
  }

  @get('/set-points/count', {
    responses: {
      '200': {
        description: 'SetPoint model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetPoint) where?: Where<SetPoint>,
  ): Promise<Count> {
    return this.setPointRepository.count(where);
  }

  @get('/set-points', {
    responses: {
      '200': {
        description: 'Array of SetPoint model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetPoint, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetPoint) filter?: Filter<SetPoint>,
  ): Promise<SetPoint[]> {
    return this.setPointRepository.find(filter);
  }

  @patch('/set-points', {
    responses: {
      '200': {
        description: 'SetPoint PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetPoint, {partial: true}),
        },
      },
    })
    setPoint: SetPoint,
    @param.where(SetPoint) where?: Where<SetPoint>,
  ): Promise<Count> {
    return this.setPointRepository.updateAll(setPoint, where);
  }

  @get('/set-points/{id}', {
    responses: {
      '200': {
        description: 'SetPoint model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetPoint, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetPoint, {exclude: 'where'}) filter?: FilterExcludingWhere<SetPoint>
  ): Promise<SetPoint> {
    return this.setPointRepository.findById(id, filter);
  }

  @patch('/set-points/{id}', {
    responses: {
      '204': {
        description: 'SetPoint PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetPoint, {partial: true}),
        },
      },
    })
    setPoint: SetPoint,
  ): Promise<void> {
    await this.setPointRepository.updateById(id, setPoint);
  }

  @put('/set-points/{id}', {
    responses: {
      '204': {
        description: 'SetPoint PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setPoint: SetPoint,
  ): Promise<void> {
    await this.setPointRepository.replaceById(id, setPoint);
  }

  @del('/set-points/{id}', {
    responses: {
      '204': {
        description: 'SetPoint DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setPointRepository.deleteById(id);
  }
}
