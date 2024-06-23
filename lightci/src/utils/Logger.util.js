// Logger.util.js
const fs = require("fs");
const { createLogger, format, transports } = require("winston");

fs.exists(__dirname + '/../../logs/all.log', function (exists) {
    console.log(exists ? "existed" : "created");
});

let logger = createLogger({
    level: 'http', handleExceptions: true, json: true, transports: [
        new transports.File({
            level: 'http', filename: __dirname + '/../../logs/all.log', maxsize: 52428800, maxFiles: 50, tailable: true, format: format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            })
        }),
        new transports.Console({ level: 'debug', prettyPrint: true, colorize: true })],
});

logger.stream = {
    write: function (message, encoding) {
        logger.http(message);
    }
};

module.exports = { logger };