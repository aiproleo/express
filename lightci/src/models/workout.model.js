const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mode: { type: String, required: false },
  equipment: { type: [String], required: false },
  exercises: { type: [String], required: false },
  trainerTips: { type: [String], required: false },
}, {
  timestamps: true,
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
