import { inject, injectable } from 'tsyringe';

import { ScanResponse } from '@config/dynamoose';

import Example from '../infra/dynamoose/entities/Example';
import IExampleRepository from '../repositories/IExampleRepository';

@injectable()
class ListExamplesService {
  constructor(
    @inject('ExampleRepository')
    private exampleRepository: IExampleRepository,
  ) {}

  async execute(): Promise<ScanResponse<Example>> {
    return this.exampleRepository.findAll();
  }
}

export default ListExamplesService;
