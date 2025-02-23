const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");
const itemRouter = require("./routes/itemRouter");

require("dotenv").config();

const db = require("./config/mongooseConnection");

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ['https://collector-organizer.vercel.app', 'http://localhost:5173'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

app.use('/user', userRouter);
app.use('/item', itemRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})