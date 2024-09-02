import express from 'express';
import { createAdmin } from '../Controllers/adminController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route for creating an admin user (can be protected further with custom middleware if necessary)
router.post('/create-admin', protect, adminOnly, createAdmin);

export default router;