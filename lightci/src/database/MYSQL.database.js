const mongoose = require('mongoose')
const URI = process.env.MONGO_LIGHTCI_URI

mongoose.set('strictQuery', false)

async function connectToDatabase() {
  try {
    await mongoose.connect(URI);
    const { host, port, name } = mongoose.connection;
    console.log(`Successfully connected to database: ${name} | ${host}:${port}`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connectToDatabase, };