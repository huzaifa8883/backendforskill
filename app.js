import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

import userrouter from './Routes/user.routes.js';
import videorouter from './Routes/video.routes.js';

const app = express();

// Middleware
app.use(express.json());
const allowedOrigins = ["https://skillsodine.com", "https://www.skillsodine.com"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST","PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
// app.use('/api/withdrawal', withdrawalRoutes);
// app.use('/api/referral', referralRoutes);
// app.use('/api/referrals', referralsRoutes);
// app.use('/api/admin', adminRoutes); // Admin routes for admin-related tasks
app.use('/api/v1/user', userrouter);
app.use('/api/v1/video', videorouter);

// Set up the port
const PORT = process.env.PORT || Math.floor(3000 + Math.random() * 5000); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
