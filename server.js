// server.js
import express from 'express';
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use('/', todoRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
