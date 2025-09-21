import mongoose from 'mongoose';

// User Schema - for all users (students, mentors, admins)
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: function() {
      // Password required for all roles except students applying initially
      return this.role !== 'student' || this.isRegistered;
    },
    minlength: 6
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ['student', 'mentor', 'admin', 'manager'],
    required: true,
    default: 'student'
  },
  
  // Student-specific fields
  university: {
    type: String,
    trim: true,
    required: function() { return this.role === 'student'; }
  },
  major: {
    type: String,
    trim: true,
    required: function() { return this.role === 'student'; }
  },
  graduationYear: {
    type: Number,
    required: function() { return this.role === 'student'; }
  },
  skills: [{
    type: String,
    trim: true
  }],
  portfolio: {
    type: String,
    trim: true
  },
  github: {
    type: String,
    trim: true
  },
  linkedin: {
    type: String,
    trim: true
  },
  
  // Staff-specific fields  
  department: {
    type: String,
    trim: true,
    required: function() { return ['mentor', 'admin', 'manager'].includes(this.role); }
  },
  permissions: [{
    type: String,
    enum: ['read_users', 'write_users', 'read_projects', 'write_projects', 'read_applications', 'write_applications', 'admin_panel']
  }],
  
  // General fields
  isActive: {
    type: Boolean,
    default: true
  },
  isRegistered: {
    type: Boolean,
    default: false // True when user completes full registration
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true
});

// Don't return password in JSON
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default mongoose.model('User', userSchema);