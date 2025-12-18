import express from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import verifyAdmin from '../middlewares/verifyAdmin.js';

import { getScholarships, getScholarshipById } from '../controllers/scholarship.controller.js';

const router = express.Router();

router.get('/', getScholarships);
router.get('/:id', getScholarshipById);

export default router;
