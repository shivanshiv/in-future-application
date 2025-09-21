import express from 'express';
import {
  login,
  register,
  refreshToken,
  logout
} from './controller.js';

const router = express.Router();

// POST /api/auth/login - User login
router.post('/login', login);

// POST /api/auth/register - User registration (for students)
router.post('/register', register);

// POST /api/auth/refresh - Refresh access token
router.post('/refresh', refreshToken);

// POST /api/auth/logout - User logout
router.post('/logout', logout);

export default router;