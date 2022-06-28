require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// const URL =
//   "mongodb+srv://root:root@cluster0.llw9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const URL = process.env.MONGODB;
const errorMiddleware = require("./middlewares/errorMiddleware");
const router = require("./router/index");
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`STAAART - ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
