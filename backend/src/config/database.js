import mongoose from 'mongoose';

// Database connection function
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Graceful shutdown
export const gracefulShutdown = () => {
  mongoose.connection.close(() => {
    console.log('📦 MongoDB connection closed through app termination');
    process.exit(0);
  });
};