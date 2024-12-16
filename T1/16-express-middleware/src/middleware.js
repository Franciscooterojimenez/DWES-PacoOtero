import winston from 'winston';
import morgan from 'morgan';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.colorize(),
        winston.format.printf(info => `[${info.timestamp}] (${info.level}): ${info.message}`),
      )
    }),
  ]
});

function printDateMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method}: ${req.path}`);
  next();
}

function validateAdminMiddleware(req, res, next) {
  const password = req.headers['password'];
  if (password === 'patata') {
    next();
  } else {
    res.status(401).json({ error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición" });
  }
}

function errorMiddleware(err, req, res, next) {
  const { status = 500, message } = err;
  res.status(status).send(status === 500 ? 'Server Error' : message);
}

const morganMiddleware = morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
}, {
  stream: {
    write(message) {
      const statusCode = message.split(' ')[2];
      if (statusCode.startsWith('2')) {
        logger.info(message);
      } else if (statusCode.startsWith('4')) {
        logger.warn(message);
      } else if (statusCode.startsWith('5')) {
        logger.error(message);
      }
    }
  }
});

export { printDateMiddleware, validateAdminMiddleware, errorMiddleware, logger, morganMiddleware };
