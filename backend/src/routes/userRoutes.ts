import express from 'express';
import { signup, getAllUsers, validateSignup } from '../controllers/userController';

const router = express.Router();

// POST /api/users/signup - User registration endpoint
router.post('/signup', validateSignup, signup);

// GET /api/users - Get all users (admin endpoint)
router.get('/', getAllUsers);

export default router;