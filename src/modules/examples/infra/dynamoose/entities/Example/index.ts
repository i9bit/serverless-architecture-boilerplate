import { Document } from 'dynamoose/dist/Document';

export class Example extends Document {
  id: string;

  name: string;

  description?: string;
}

export default Example;
