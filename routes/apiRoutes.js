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
    WorkoutCollection.find({}).limit(7).then((data) => {
        res.json(data);
    });
});

//post method
router.post("/api/workouts", (req, res) => {
    WorkoutCollection.create({}).then((data) => {
        res.json(data);
    });
});

//put method
router.put("/api/workouts/:id", ({ body, params }, res) => {
    WorkoutCollection.findByIdAndUpdate(
        params.id, { $push: { exercises: body } }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    })
});

module.exports = router;