import express from 'express';
import { saveUser, getUserRole, makeAdmin } from '../controllers/users.controller.js';

const router = express.Router();

router.post('/', saveUser);
router.get('/role/:email', getUserRole);
router.patch('/admin/:email', makeAdmin);

export default router;
