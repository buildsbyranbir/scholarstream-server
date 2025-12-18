import express from 'express';
import { applyScholarship, getApplications } from '../controllers/application.controller.js';

const router = express.Router();

router.post('/', applyScholarship);
router.get('/', getApplications);

export default router;
