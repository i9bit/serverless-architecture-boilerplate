import { Router } from 'express';

import routes from './routes';

const main = Router();

main.use('/examples', routes);

export default main;
