import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

// Express App Setup
const app = express();
app.use(express.json());

// Routes
app.use('/api', productRoutes);
app.use('/api', blogRoutes);




app.listen(3000, async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/mvc-combined')
    console.log('Server running on http://localhost:3000');
});


