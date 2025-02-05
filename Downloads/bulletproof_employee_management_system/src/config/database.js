const mongoose = require('mongoose');
console.log('MONGO_URI:', process.env.MONGO_URI);  // This should print the MongoDB URI

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('MongoDB URI is undefined');
      process.exit(1);
    }

    // MongoDB connection
    await mongoose.connect(process.env.MONGO_URI);  
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
