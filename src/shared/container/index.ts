import { container } from 'tsyringe';

import ExampleRepository from '@modules/examples/infra/dynamoose/repositories/ExampleRepository';
import IExampleRepository from '@modules/examples/repositories/IExampleRepository';

container.registerSingleton<IExampleRepository>(
  'ExampleRepository',
  ExampleRepository,
);
