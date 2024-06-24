//server.js
const express = require("express")
const app     = express()
const cors    = require('cors')
const { winstonLogger, morganLogger } = require('./utils/logger.utils');
winstonLogger.info('this is winston logger')
app.use(morganLogger);

const routes  = require("./v1/routes");
const errorHandler = require('./middlewares/error-handler');
const unknownEndpoint = (request, response) => {response.status(404).send({ error: 'unknown endpoint' });};
const path = require('path');

app.use(cors())                                     //cors
app.use(express.urlencoded({ extended: true }));    //url
app.use(express.json())                             //json
app.use(express.static('public'))                     //static
app.use("/", routes);                               //routes
app.use(unknownEndpoint);                           // unknown routes 
app.use(errorHandler);                              // other errors 



// template engine
app.set('view engine', 'hbs');  // template engine: Handlebars
app.set('views', path.join(__dirname, 'hbs'));    // template fodler

// DB
const mongodb = require('./database/Mongo.database');
mongodb.connectToDatabase();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
