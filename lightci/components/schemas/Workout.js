const { Schema, model } = require('mongoose');

// Define Workout schema
const workoutSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    // Define other properties as needed
});

// Create Workout model from schema
const Workout = model('Workout', workoutSchema);

module.exports = Workout;
