import { Router } from 'express';
import { createTimesheetEntry } from '../controller/timesheetController';
import { authenticateJWT } from '../services/auth';

const router = Router();

router.post('/entry', authenticateJWT, createTimesheetEntry);

export default router;
