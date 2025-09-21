import express from 'express';
import {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
  getApplicationsByStatus
} from '../controllers/applicationController.js';

const router = express.Router();

// GET /api/applications - Get all applications
router.get('/', getAllApplications);

// GET /api/applications/status/:status - Get applications by status
router.get('/status/:status', getApplicationsByStatus);

// GET /api/applications/:id - Get application by ID
router.get('/:id', getApplicationById);

// POST /api/applications - Create new application
router.post('/', createApplication);

// PUT /api/applications/:id - Update application
router.put('/:id', updateApplication);

// DELETE /api/applications/:id - Delete application
router.delete('/:id', deleteApplication);

export default router;