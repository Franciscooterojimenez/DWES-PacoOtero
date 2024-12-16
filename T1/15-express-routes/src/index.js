import express from 'express';
import { animalsRouter } from './routers.js';

const port = 3000;

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/header', (req, res) => {
	if(req.headers.token){
		res.send(req.headers.token)
	}else{
		const errorObject = {
			"code": 401,
			"error": "Unauthorized",
			"message": "Error: set a token to login"
		}
		res.status(401).send(errorObject);
	}
});

server.get('/params/:name', (req, res) => {
	res.send(`Hola ${req.params.name}`);
})

server.get('/query', (req, res) => {
	const num = parseInt(req.query.n) || 100;
	let acc = 0;
	for(let i = 0; i <= num; i++){
		acc += i;
	}
	res.send(`${acc}`);
})

server.post ('/body', (req, res) => {
	const data = Object.entries(req.body).map(([key, value]) => `<li><b>${key}</b>: ${value}</li>`);
	res.send(`<ul>${data.join('')}</ul>`);
})

server.use('/animals', animalsRouter);

server.listen(port, () => {
	console.log(`Server ready at port ${port}`);
})