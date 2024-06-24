// logger.utils.js
const { createLogger, format, transports } = require("winston");
const morgan = require('morgan');

const winstonLogger = createLogger({
    level: 'debug',
    format: format.combine(
        format.colorize(),
        format.simple()
    ),
    transports: [
        new transports.Console()
    ]
});

const morganLogger=morgan(
    'combined',{
        stream: {
            write: (text) => winstonLogger.debug(`Morgan says: ${text.trim()}`)
        }
    }
)

module.exports = { winstonLogger, morganLogger };
