/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *   post:
 *   delete:
 */

const express = require('express');
const apicache = require("apicache");
const router = express.Router();
const cache = apicache.middleware;

const workoutController = require('../../controllers/workout.controller')

router.get('/test', (req, res) => { res.json({ name: 'my start', website: 'https://omnidevx.netlify.app' }); });

router.get("/", cache("2 minutes"), workoutController.getAll);

// router.get('/:workoutId', workoutController.getOne);

router.post('/', workoutController.createNew);
router.post('/import_seed', workoutController.importSeed);

// router.path('/:workoutId', workoutController.updateOne);
// router.delete('/:workoutId', workoutController.deleteOne)


module.exports = router;