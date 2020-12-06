import { Router } from 'express';

import ExamplesController from '../controllers/Examples.controller';
import CreateExampleValidator from '../validators/CreateExample.validator';
import GetExampleValidator from '../validators/GetExample.validator';

const examplesRouter = Router();

const examplesController = new ExamplesController();

examplesRouter.post('/', CreateExampleValidator, examplesController.create);
examplesRouter.get('/', examplesController.index);
examplesRouter.get('/:id', GetExampleValidator, examplesController.read);

export default examplesRouter;
