const mongoose = require('mongoose');

const schema = mongoose.Schema;

const workoutSchema = schema({
  owner: schema.Types.ObjectId,
  name: {
    type: String,
    default: 'default-workout-name',
    min: 3,
    max: 10
  },
  exercises: [
    {
      name: {
        type: String,
        min: 3,
        max: 10
      },
      sets: [
        {
          reps: Number,
          weight: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Workout', workoutSchema);
