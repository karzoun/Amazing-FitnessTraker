const router = require("express").Router();
//get mongoose object
const WorkoutCollection = require("../models/workout");

//get methods
router.get("/api/workouts", (req, res) => {
    WorkoutCollection.find().then((data) => {
        res.json(data);
    });
});
router.get("/api/workouts/range", (req, res) => {
    WorkoutCollection.find().then((data) => {
        res.json(data);
    });
});