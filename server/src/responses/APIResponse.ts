import { Response } from 'express';
import APIResponseData from '../interfaces/APIResponseData';

const APIResponse = (res: Response, data: APIResponseData) => {
	return res.json({
		code: data.code,
		message: data.message,
		payload: data.payload
	})
}

export default APIResponse;