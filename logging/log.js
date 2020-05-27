const winston = require('winston');

LOGGER = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logging/error.log', level: 'error'}),
        new winston.transports.File({ filename: 'logging/app.log'})
    ]
});
