import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import scholarshipRoutes from './routes/scholarship.routes.js';
import applicationRoutes from './routes/application.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import userRoutes from './routes/users.routes.js';

dotenv.config();

const app = express(); 

// middlewares
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use('/api/users', userRoutes);  
app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => {
  res.send('ScholarStream Server Running');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
