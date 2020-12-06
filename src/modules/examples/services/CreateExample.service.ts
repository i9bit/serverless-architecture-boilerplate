import { inject, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';

import Example from '../infra/dynamoose/entities/Example';
import IExampleRepository from '../repositories/IExampleRepository';

interface ICreateExample {
  name: string;
  description?: string;
}

@injectable()
class CreateExampleService {
  constructor(
    @inject('ExampleRepository')
    private exampleRepository: IExampleRepository,
  ) {}

  async execute({ name, description }: ICreateExample): Promise<Example> {
    const response = await this.exampleRepository.create({
      id: uuid(),
      name,
      description,
    });
    return response;
  }
}

export default CreateExampleService;
