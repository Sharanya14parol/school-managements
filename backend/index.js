const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const Routes = require("./routes/route.js");

dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(cors());

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});

const DB = process.env.MONGODB_URI || 'mongodb+srv://Sharanya_parol9:shashwath@cluster0.hxnpff0.mongodb.net/project';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.error("Database connection error:", err);
});