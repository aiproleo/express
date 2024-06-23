// workout.service.js
const WorkoutModel = require('../models/workout.model');

const getAll = async () => {
    try {
        const getAll = await WorkoutModel.find();
        return getAll;
    } catch (error) {
        throw error;
    }
};

const getOne = () => {
// const getTransactionById = async (transactionId) => {
//     try {
//         const transaction = await TransactionModel.findOne({ id: transactionId });
//         return transaction;
//     } catch (error) {
//         throw error;
//     }
// };
return;
}

const createNew = () => {
    return;
}

const updateOne = () => {
    return;
}

const deleteOne = () => {
    return;
}



const importSeed = async (workouts) => {
    try {
        // Insert into MongoDB using Mongoose model
        const result = await WorkoutModel.insertMany(workouts);
        return result; // Return the result of insertMany if needed
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};

module.exports={
    getAll,
    getOne,
    createNew,
    updateOne,
    deleteOne,
    importSeed
};