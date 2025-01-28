import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/user.route.js'
import authRouter from './routers/auth.route.js'
import listingRouter from './routers/listing.route.js'
import { errorMiddleware } from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

// Load environment variables
dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit the process if the connection fails
  });

// Initialize Express
const app = express();

app.use(express.json())
app.use(cookieParser())

// Define the PORT
const PORT = process.env.PORT || 3000;

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

// Error handling middleware
app.use(errorMiddleware)


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
