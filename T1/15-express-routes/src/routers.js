import express from 'express';

export const animalsRouter = express.Router();

animalsRouter.use('/animal', (req, res) => res.send(req.method));

animalsRouter.get('/dog', (req, res) => {
	res.send({"grow": "guau guau"})
})

animalsRouter.get('/cat', (req, res) => {
	res.send({"grow": "miau"})
})

animalsRouter.get('/bird', (req, res) => {
	res.send({"grow": "pio pio"})
})

animalsRouter.get('*', (req, res) => {
	res.send({"code": 404, "error": "Not Found", "message": "Error: Path not found"});
})