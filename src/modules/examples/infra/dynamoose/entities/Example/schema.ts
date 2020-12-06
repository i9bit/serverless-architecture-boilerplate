import dynamoose from '@config/database';

import { Example } from '.';

const schema = new dynamoose.Schema(
  {
    id: {
      type: String,
      required: true,
      hashKey: true,
    },
    name: {
      type: String,
      required: true,
      index: {
        global: true,
        name: 'idx_name_examples',
      },
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export default dynamoose.model<Example>('Examples', schema, {
  throughput: 'ON_DEMAND',
});
