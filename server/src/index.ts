import express, { Application } from 'express';
import bodyParser from 'body-parser';
import LoadRoutes from './routes';

require('dotenv').config();

const launchServer = () => {
	const app: Application = express();
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	LoadRoutes(app);
	app.listen(5000);
};

const initializeApp = async () => {
	launchServer();
};

initializeApp();