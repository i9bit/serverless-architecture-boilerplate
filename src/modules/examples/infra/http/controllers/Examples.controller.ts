import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateExampleService from '@modules/examples/services/CreateExample.service';
import GetExampleService from '@modules/examples/services/GetExample.service';
import ListExamplesService from '@modules/examples/services/ListExamples.service';

class ExamplesController {
  async index(_request: Request, response: Response): Promise<Response> {
    const listExamplesService = container.resolve(ListExamplesService);
    const examples = await listExamplesService.execute();
    return response.json(examples);
  }

  async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getExampleService = container.resolve(GetExampleService);
    const example = await getExampleService.execute(id);
    return response.json(example);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createExampleService = container.resolve(CreateExampleService);
    const example = await createExampleService.execute({
      name,
      description,
    });

    return response.status(202).json(example);
  }
}

export default ExamplesController;
