const express = require("express");
const Workout = require("../models/workoutModel");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a  workout" });
});

//UPDATE a  workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a  workout" });
});

module.exports = router;
