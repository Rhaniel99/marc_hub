import { Router } from 'express';
import { sendConfirmationEmail, sendEmail } from '@controllers/appController.js';

const router = Router();

/** HTTP Requests */
router.get('/send-confirm', sendConfirmationEmail);
router.post('/send-email', sendEmail);

export default router;