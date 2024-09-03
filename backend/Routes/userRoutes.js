import express from 'express';
import { register, login, purchasePackage } from '../Controllers/authController.js'; // Include purchasePackage

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/purchase-package', purchasePackage); // Add this route

export default router;
