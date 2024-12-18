import app from './app.js';
import logger from './utils/index.js'
import 'dotenv/config'

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
  logger.info('Server started successfully');
});