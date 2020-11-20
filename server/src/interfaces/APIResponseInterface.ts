interface APIResponseInterface{
	code: 200 | 500,
	message: string,
	payload: Object
}

export default APIResponseInterface;