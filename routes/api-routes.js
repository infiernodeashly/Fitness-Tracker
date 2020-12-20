const Workout = require("../schema/workout")
module.exports = (app) => {

  // pulls all workouts, rendering the latest workout on the screen
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        // pulls total duration of exercises
        dbWorkout.forEach(workout => {
          let sumDuration = 0;
          workout.exercises.forEach(exercise => {
            sumDuration += exercise.duration;
          });
          workout.totalDuration = sumDuration;
        });
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
      });
  });

  // Adds exercises and returns updated record 
  app.put("/api/workouts/:id", (req, res) => {

    Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body }
      },
      { new: true }).then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
      });

  });

  //create workout and processes the total duration
  app.post("/api/workouts", ({ body }, res) => {
    const workouts = new Workout(body);
    (workouts) => {
      workouts.forEach(workout => {
        let sumDuration = 0;
        workout.exercises.forEach(exercise => {
          sumDuration += exercise.duration;
        });
        workout.totalDuration = sumDuration;
      });
    }
    Workout.create(workouts).then((workoutdb => {
      console.log(workoutdb);
      res.json(workoutdb);
    })).catch(err => {
      res.json(err);
    });
  });

  // gets all workouts 
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });

  });


}