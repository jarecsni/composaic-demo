import { Router } from 'express';

const router = Router();

// Example API route
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

export default router;