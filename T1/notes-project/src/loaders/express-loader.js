import express from "express";
import router from '../routes/index.js';
import { printDateMiddleware } from "../middlewares/misc-middleware.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";
import { morganMiddleware } from "../config/morgan.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../documentation/swagger.json' assert { type: 'json' };

export default function (server){
	// CONFIG
	server.use(express.json());
	server.use(express.urlencoded());
	// MDW
	server.use(morganMiddleware);
	server.use(printDateMiddleware);
	// RUTAS
	server.use(router);
	server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	// ERRORS
	server.use(errorMiddleware);
}