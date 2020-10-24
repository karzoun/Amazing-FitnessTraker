const mongoose = require("mongoose");
const Collection = mongoose.Schema;

//create class instance of mongoose collection
//call its constructor function
const workoutCollection = new Collection({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            required: "Please input exercise type!!!",
        },
        name: {
            type: String,
            required: "Please inout exercise name!!!",
        },
        duration: {
            type: Number,
            required: "Please inout exercise duration!!!",
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    }, ],
});

const WorkoutCollection = mongoose.model("Workout", workoutCollection);

module.exports = WorkoutCollection;