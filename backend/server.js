require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

//express app
const app = express();

//middleware

//once the request comes in, it will check the if it has some body to the request, then pass in json()
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connect to DB and listeneing on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
