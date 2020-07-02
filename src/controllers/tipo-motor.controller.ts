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
import {TipoMotor} from '../models';
import {TipoMotorRepository} from '../repositories';

export class TipoMotorController {
  constructor(
    @repository(TipoMotorRepository)
    public tipoMotorRepository : TipoMotorRepository,
  ) {}

  @post('/tipo-motors', {
    responses: {
      '200': {
        description: 'TipoMotor model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoMotor)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoMotor, {
            title: 'NewTipoMotor',
            exclude: ['Id'],
          }),
        },
      },
    })
    tipoMotor: Omit<TipoMotor, 'Id'>,
  ): Promise<TipoMotor> {
    return this.tipoMotorRepository.create(tipoMotor);
  }

  @get('/tipo-motors/count', {
    responses: {
      '200': {
        description: 'TipoMotor model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TipoMotor) where?: Where<TipoMotor>,
  ): Promise<Count> {
    return this.tipoMotorRepository.count(where);
  }

  @get('/tipo-motors', {
    responses: {
      '200': {
        description: 'Array of TipoMotor model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TipoMotor, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TipoMotor) filter?: Filter<TipoMotor>,
  ): Promise<TipoMotor[]> {
    return this.tipoMotorRepository.find(filter);
  }

  @patch('/tipo-motors', {
    responses: {
      '200': {
        description: 'TipoMotor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoMotor, {partial: true}),
        },
      },
    })
    tipoMotor: TipoMotor,
    @param.where(TipoMotor) where?: Where<TipoMotor>,
  ): Promise<Count> {
    return this.tipoMotorRepository.updateAll(tipoMotor, where);
  }

  @get('/tipo-motors/{id}', {
    responses: {
      '200': {
        description: 'TipoMotor model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoMotor, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TipoMotor, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoMotor>
  ): Promise<TipoMotor> {
    return this.tipoMotorRepository.findById(id, filter);
  }

  @patch('/tipo-motors/{id}', {
    responses: {
      '204': {
        description: 'TipoMotor PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoMotor, {partial: true}),
        },
      },
    })
    tipoMotor: TipoMotor,
  ): Promise<void> {
    await this.tipoMotorRepository.updateById(id, tipoMotor);
  }

  @put('/tipo-motors/{id}', {
    responses: {
      '204': {
        description: 'TipoMotor PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoMotor: TipoMotor,
  ): Promise<void> {
    await this.tipoMotorRepository.replaceById(id, tipoMotor);
  }

  @del('/tipo-motors/{id}', {
    responses: {
      '204': {
        description: 'TipoMotor DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoMotorRepository.deleteById(id);
  }
}
