require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");

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

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listeneing on port ", process.env.PORT);
});
