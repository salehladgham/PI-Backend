const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
require("dotenv").config();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use("/pulic/auth", require("./routes/authRoutes"));

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
