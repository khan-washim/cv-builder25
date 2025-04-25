const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://washimuddin760:wa1234@cluster0.1czcs.mongodb.net/cv-builder33';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
