const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend is running...');
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})