import express from 'express';
import { logger } from './middleware.js';
import { router } from './routes.js';

const server = express();

server.use(express.json());

server.use(router);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
  logger.info('Server started successfully');
});
