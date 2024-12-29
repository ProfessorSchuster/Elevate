import { Router } from 'express';
import { register, login, me } from './auth.controller';
import { authMiddleware } from './auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, me);

export default router;
