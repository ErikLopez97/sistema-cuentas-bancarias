import express from 'express';
import connectDB from './config/db.mjs';
import dotenv from 'dotenv';
import accountRoutes from './routes/accountRoutes.mjs';
import setupSwagger from './config/swagger.mjs';
import authRoutes from './routes/authRoutes.mjs';

dotenv.config();

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api', accountRoutes);
app.use('/api', authRoutes);

// Setup Swagger
setupSwagger(app);

const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

export default app;