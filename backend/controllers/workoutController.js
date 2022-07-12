const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//get all workouts

const getWorkouts = async (req, res) => {
  //use module to find all collection and sorted by created date
  const workouts = await Workout.find().sort({ createAt: -1 });
  res.status(200).json(workouts);
};

//get a single workout

const getWorkout = async (req, res) => {
  const { id } = req.params;

  //check if the id is vaild
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such workout" });
  }

  const workout = await Workout.findById(id);
  //if workout is not exist, sending back an err
  if (!workout) {
    return res.status(404).json({ err: "No such workout" });
  }

  res.status(200).json(workout);
};

//create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {};

//update a workout
const updateWorkout = async (req, res) => {};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
