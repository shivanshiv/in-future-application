import express from 'express';
import {
  getAllUsers,
  getStudents,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  searchStudentsBySkills
} from '../controllers/userController.js';

const router = express.Router();

// GET /api/users - Get all users (with optional role filter)
router.get('/', getAllUsers);

// GET /api/users/students - Get students only
router.get('/students', getStudents);

// GET /api/users/students/search - Search students by skills
router.get('/students/search', searchStudentsBySkills);

// GET /api/users/:id - Get user by ID
router.get('/:id', getUserById);

// POST /api/users - Create new user
router.post('/', createUser);

// PUT /api/users/:id - Update user
router.put('/:id', updateUser);

// DELETE /api/users/:id - Delete user
router.delete('/:id', deleteUser);

export default router;