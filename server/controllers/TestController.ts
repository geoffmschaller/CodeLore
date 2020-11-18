import express, {Request, Response} from 'express';

const TestController = express.Router();

TestController.get('/', (req: Request, res: Response) => {
	res.json({ running: true });
});

export default TestController;