import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/user.route.js'
import authRouter from './routers/auth.route.js'

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

// Define the PORT
const PORT = process.env.PORT || 3000;

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
