import express from 'express';
import applicationRoutes from './applications.js';
import userRoutes from './users.js';
import projectRoutes from './projects.js';
import { authRoutes } from '../auth/index.js';

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/applications', applicationRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

export default router;