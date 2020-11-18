import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import TestController from './controllers/TestController';

require('dotenv').config();

const launchServer = () => {
	const app = express();
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use('/', TestController);
	app.listen(5000);
};

const initializeApp = async () => {
	launchServer();
};

initializeApp();