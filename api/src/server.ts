import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import connectDB from './utils/database';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// CORS configuration
app.use(cors({
  // ✅ GOOD: Using an env variable is the right way.
  origin: process.env.FRONTEND_URL || 'http://localhost:8080', 
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(morgan('combined')); // This will log to Vercel's console

// Health check endpoint
// ✅ CHANGED: Path must be '/api/health' because this file is the /api handler.
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Routes
// ✅ GOOD: This will correctly become 'https://.../api/users'
app.use('/api/users', userRoutes);

// 404 handler
// ✅ GOOD: This will catch any requests to /api/* that don't match.
app.use((req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});



// ✅ KEEP: This is the *only* thing that should be left at the end.
export default app;