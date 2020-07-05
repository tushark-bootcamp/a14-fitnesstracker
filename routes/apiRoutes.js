var db = require("../models");

// The assignment required this file to be written from scratch.
// Hint: To know all API routes required, find all the HTTP verb methods used in public/api.js file.
// The path used in this file was /api/workouts hence chosen this path.

module.exports = function (app) {

    // Called by getLastWorkout in api.js
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkouts) {
            
            res.json(dbWorkouts);
        });
    });

    // Called by getLastWorkout in api.js
    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    // Called by addExercise in api.js
    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.
        update({_id: req.params.id}, 
            {$push: {exercises: req.body}})
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            });
    });

    // Called by createWorkout in api.js
    app.post("/api/workouts", function ({
        body
    }, res) {
        db.Workout.create(body)
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });
};