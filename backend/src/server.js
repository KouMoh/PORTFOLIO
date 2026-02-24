const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is missing. Add it in backend/.env');
    process.exit(1);
}

connectDB();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || '*'
    })
);

app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is running'
    });
});

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Portfolio backend is running',
        health: '/api/health'
    });
});

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
