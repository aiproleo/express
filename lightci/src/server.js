//server.js
const express = require("express")
const app     = express()
const cors    = require('cors')
const morgan = require('morgan');
const logger = require('./utils/Logger.util');
app.use(morgan(":date[iso] :remote-addr :method :url :status :user-agent",{stream:logger.stream}))

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
