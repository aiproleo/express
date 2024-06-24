// ./controllers/workout.controller.js
const workoutService = require('../services/workout.services');

const getAll = async(req, res) => {
  // const all = workoutService.getAll()
  // logger.log("debug", "getAll!");
  const allWorkouts = await workoutService.getAll();
  // console.log('Received workouts:', allWorkouts);

  res.send({ status: "OK", data: allWorkouts });
}

const getOne = (req, res) => {
  const one = workoutService.getOne()
  res.send("One")
}

const updateOne = (req, res) => {
  const updateOne = workoutService.udpateOne();
  res.send("update")
}

const deleteOne = (req, res) => {
  const deleteOne = workoutService.deleteOne();
  res.send("delete")
}

const createNew = (req, res) => {
  const newOne = workoutService.createNew();
  res.send("NewOne")
}

const importSeed = async (req, res) => {
  try {
    const { workouts } = req.body;  // Extract workouts from the request body
    // Log the incoming workouts data
    console.log('Received workouts:', workouts);
    const importSeedResult = await workoutService.importSeed(workouts);
    return res.status(201).json(importSeedResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Import Seed Error' });
  }
};


module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
  importSeed,
}