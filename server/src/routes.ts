import {Application} from 'express';
import TestController from './controllers/TestController';

const LoadRoutes = (app: Application) => {
	app.use('/', TestController);
}

export default LoadRoutes;