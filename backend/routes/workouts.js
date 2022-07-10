const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET a single workout
router.get("/.id", (res, req) => {
  res.json({ mssg: "GET a single workout" });
});

//POST a new workout
router.post("./", (res, rep) => {
  res.json({ mssg: "POST a new workout" });
});

//DELETE a new workout
router.delete("./:id", (res, rep) => {
  res.json({ mssg: "DELETE a  workout" });
});

//UPDATE a  workout
router.patch("./:id", (res, rep) => {
  res.json({ mssg: "UPDATE a  workout" });
});

module.exports = router;
