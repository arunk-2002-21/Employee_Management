import { Router } from 'express';
import { generateReport } from '../controller/reportController';
import { authenticateJWT } from '../services/auth';

const router = Router();

router.get('/generate', authenticateJWT, generateReport);

export default router;
