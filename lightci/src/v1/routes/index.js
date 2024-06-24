// // index.js
const express = require("express");
const router = express.Router();
const rootRoutes = require('./root.routes.js')
const apiRoutes  = require('./api.routes.js')
const { swaggerDocs } = require("../swagger");

router.use('/',rootRoutes);
router.use('/api/v1', apiRoutes);

const PORT = process.env.PORT || 3001; // Adjust port as per your configuration
swaggerDocs(router, PORT); // Pass the router and port to the Swagger setup function

module.exports = router;