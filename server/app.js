const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");

require("dotenv").config();

const db = require("./config/mongooseConnection");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

app.use('/user', userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})