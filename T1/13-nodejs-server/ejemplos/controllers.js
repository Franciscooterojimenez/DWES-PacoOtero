export function pingController(req, res){
	res.statusCode = 418;
	res.setHeader('Content-Type', 'text/html');
	return res.end('<h1>Request acceptable</h1>');
};

export function jsonController(req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	const resObject = {
		message: 'hello world!'
	};
	return res.end(JSON.stringify(resObject));
}

export function notFoundController(req, res){
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	return res.end('<h1>Not found</h1>');
}