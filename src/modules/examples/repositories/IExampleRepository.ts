import { ScanResponse } from '@config/dynamoose';

import Example from '../infra/dynamoose/entities/Example';

export default interface IExampleRepository {
  getExample(id: string): Promise<Example>;
  create(data: Partial<Example>): Promise<Example>;
  findAll(): Promise<ScanResponse<Example>>;
}
