import { createLogger, transports, format} from 'winston';

const logger = createLogger({
    transports : [
        new transports.Console({
            level:'info'
        })
    ]
});

module.exports = logger;