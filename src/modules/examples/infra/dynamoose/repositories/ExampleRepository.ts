import { ScanResponse } from '@config/dynamoose';
import IExampleRepository from '@modules/examples/repositories/IExampleRepository';

import Example from '../entities/Example';
import Schema from '../entities/Example/schema';

class ExampleRepository implements IExampleRepository {
  getExample(id: string): Promise<Example> {
    return Schema.get(id);
  }

  create(data: Partial<Example>): Promise<Example> {
    return Schema.create(data);
  }

  findAll(): Promise<ScanResponse<Example>> {
    return Schema.scan().exec();
  }
}

export default ExampleRepository;
