import { inject, injectable } from 'tsyringe';

import ServiceException from '@shared/errors/ServiceException';

import Example from '../infra/dynamoose/entities/Example';
import IExampleRepository from '../repositories/IExampleRepository';

@injectable()
class GetExampleService {
  constructor(
    @inject('ExampleRepository')
    private exampleRepository: IExampleRepository,
  ) {}

  async execute(id: string): Promise<Example> {
    const example = await this.exampleRepository.getExample(id);

    if (!example) {
      throw new ServiceException({ message: "Example doesn't found" });
    }

    return example;
  }
}

export default GetExampleService;
