import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  userType: 'worker' | 'employer';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address'
    ]
  },
  userType: {
    type: String,
    required: [true, 'User type is required'],
    enum: {
      values: ['worker', 'employer'],
      message: 'User type must be either worker or employer'
    }
  }
}, {
  timestamps: true,
  collection: 'waitlist_users'
});

// Ensure clean document creation
userSchema.pre('save', function(next) {
  // Remove any undefined fields that might cause issues
  Object.keys(this.toObject()).forEach(key => {
    if (this[key as keyof IUser] === undefined || this[key as keyof IUser] === null) {
      delete this[key as keyof IUser];
    }
  });
  next();
});

// Create indexes for better performance
userSchema.index({ createdAt: -1 });

const User = mongoose.model<IUser>('User', userSchema);

export default User;