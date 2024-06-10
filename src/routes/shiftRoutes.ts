import { Router } from 'express';
import { startShift, endShift } from '../controller/shiftController';
import { authenticateJWT } from '../services/auth';

const router = Router();

router.post('/start', authenticateJWT, startShift);
router.post('/end', authenticateJWT, endShift);

export default router;
