const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require("../routes/userRouter");
const itemRouter = require("../routes/itemRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'https://collector-organizer.vercel.app', // Frontend URL
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/user', userRouter);
app.use('/api/item', itemRouter);

module.exports = app;
