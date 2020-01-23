import { Router } from 'express';
import DevController from './controllers/DevController';
import SearchController from './controllers/SearchController';

const routes = Router();

routes.post('/users', DevController.store);
routes.get('/users', DevController.index);

routes.get('/search', SearchController.index);

export default routes;
