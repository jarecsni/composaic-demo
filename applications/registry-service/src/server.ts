import express from 'express';
import path from 'path';
import cors from 'cors';
import apiRoutes from './api/routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// API routes
app.use('/api', apiRoutes);

// Fallback to index.html for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});