import express from 'express';
import { getScholarships, getScholarshipById } from '../controllers/scholarship.controller.js';

const router = express.Router();

router.get('/', getScholarships);
router.get('/:id', getScholarshipById);

export default router;
