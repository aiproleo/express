// logger.utils.js
const { createLogger, format, transports } = require("winston");
const morgan = require('morgan');

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${label} [${level}]: ${message}`; // LOG FORMAT
});

const winstonLogger = createLogger({
    level: 'debug',
    format: format.combine(
        label({ label: 'dev' }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        myFormat
    ),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
        new transports.Console()
    ]
});

const morganLogger = morgan(
    'combined', {
    stream: {
        write: (text) => winstonLogger.debug(`Morgan says: ${text.trim()}`)
    }
}
)

module.exports = { winstonLogger, morganLogger };
