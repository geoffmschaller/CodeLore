import { Response } from 'express';
import APIResponseInterface from '../interfaces/APIResponseInterface';

const APIResponse = (res: Response, data: APIResponseInterface) => {
	return res.json({
		code: data.code,
		message: data.message,
		payload: data.payload
	})
}

export default APIResponse;