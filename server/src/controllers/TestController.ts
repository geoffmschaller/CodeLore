import express, { Request, Response, Router } from 'express';
import APIResponse from '../responses/APIResponse';

const TestController: Router = express.Router();

TestController.get('/', (req: Request, res: Response) => {
	APIResponse(res, {
		code: 500,
		message: "It works!",
		payload: {}
	});
});

export default TestController;