import mongoose from 'mongoose';

// Project Schema - for website building projects
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  clientEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  clientPhone: {
    type: String,
    trim: true
  },
  projectType: {
    type: String,
    enum: ['business', 'ecommerce', 'portfolio', 'landing'],
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  timeline: {
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    estimatedDuration: {
      type: Number // in weeks
    }
  },
  requirements: [{
    type: String,
    trim: true
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  assignedStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // References users with role 'student'
  }],
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // References users with role 'mentor'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'review', 'completed', 'delivered', 'cancelled'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  }
}, {
  timestamps: true
});

export default mongoose.model('Project', projectSchema);