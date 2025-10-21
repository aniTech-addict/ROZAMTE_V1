import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import User, { IUser } from '../models/User';

// Validation rules
export const validateSignup = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

  body('userType')
    .isIn(['worker', 'employer'])
    .withMessage('User type must be either worker or employer')
];

// Signup controller
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
      return;
    }

    const { name, email, userType } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      res.status(409).json({
        success: false,
        message: `You are already on the waitlist with this  ${existingUser.email}`
      });
      return;
    }

    
    const newUser: IUser = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      userType
    });

    // Remove any undefined fields that might cause issues
    Object.keys(newUser).forEach(key => {
      if (newUser[key as keyof IUser] === undefined) {
        delete newUser[key as keyof IUser];
      }
    });

    const savedUser = await newUser.save();

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Successfully joined the Rozmate waitlist!',
      data: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        userType: savedUser.userType,
        createdAt: savedUser.createdAt
      }
    });

  } catch (error: any) {
    console.error('Signup error:', error);

    // Handle MongoDB duplicate key error (including legacy username index)
    if (error.code === 11000) {
      // Check if it's a duplicate email error or legacy username index error
      if (error.keyPattern && error.keyPattern.email) {
        res.status(409).json({
          success: false,
          message: 'You are already on the waitlist with this email address'
        });
      } else {
        // Legacy username index or other duplicate key error
        res.status(409).json({
          success: false,
          message: 'You are already on the waitlist with this email address'
        });
      }
      return;
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'Failed to join waitlist. Please try again later.'
    });
  }
};

// Get all users (for admin purposes)
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({})
      .sort({ createdAt: -1 })
      .select('name email userType createdAt');

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users'
    });
  }
};