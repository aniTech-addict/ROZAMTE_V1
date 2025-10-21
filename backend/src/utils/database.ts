import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rozmate_waitlist';

    const conn = await mongoose.connect(mongoURI);

    console.log(` MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    console.log('💡 To use MongoDB locally, please:');
    console.log('   1. Install MongoDB: https://docs.mongodb.com/manual/installation/');
    console.log('   2. Start MongoDB service');
    console.log('   3. Or use MongoDB Atlas: https://www.mongodb.com/atlas');
    console.log('   🔧 For development testing, set USE_MOCK_DB=true in .env');
    // Don't exit in production, just log the error and continue
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

// Handle connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed through app termination');
  process.exit(0);
});

export default connectDB;