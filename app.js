import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import withdrawalRoutes from './routes/withdrawalRoutes';
import referralRoutes from './routes/referral';
import referralsRoutes from './routes/referrals';
import adminRoutes from './routes/adminRoutes';
import userrouter from './Routes/user.routes.js';
import videorouter from './Routes/video.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/withdrawal', withdrawalRoutes);
app.use('/api/referral', referralRoutes);
app.use('/api/referrals', referralsRoutes);
app.use('/api/admin', adminRoutes); // Admin routes for admin-related tasks
app.use('/api/v1/user', userrouter);
app.use('/api/v1/video', videorouter);

// Set up the port
const port = process.env.PORT || 5002;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
