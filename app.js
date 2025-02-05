import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import net from "net";

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
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1/user', userrouter);
app.use('/api/v1/video', videorouter);

// Set up the port
const PORT = 8090 || Math.floor(3000 + Math.random() * 5000);

// Check if port is available
const server = net.createServer();
server.once("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use!`);
    process.exit(1);
  }
});
server.once("listening", () => {
  server.close();
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
});
server.listen(PORT);

export { app };
