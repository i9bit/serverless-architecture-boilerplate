import { Router } from 'express';

import examplesRouter from '@modules/examples/infra/http/routes/examples.router';

const routes = Router();

routes.use(examplesRouter);

export default routes;
