import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function WorkoutPlan() {
  const location = useLocation();
  const { split } = location.state || { split: 'Custom Split' };
  const [workoutDays, setWorkoutDays] = useState(3);
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: 0, reps: [] }]);
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
  };

  return (
    <div className="WorkoutPlan">
      <h1>Your Workout Plan: {split}</h1>
      <div>
        <label>Number of Workout Days:</label>
        <input
          type="number"
          value={workoutDays}
          onChange={(e) => setWorkoutDays(e.target.value)}
        />
      </div>
      <div>
        <h2>Add Exercises</h2>
        {exercises.map((exercise, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Exercise Name"
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
            />
            <input
              type="number"
              placeholder="Sets"
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
            />
            {Array.from({ length: exercise.sets }).map((_, setIndex) => (
              <input
                key={setIndex}
                type="number"
                placeholder={`Reps for Set ${setIndex + 1}`}
                value={exercise.reps[setIndex] || ''}
                onChange={(e) => {
                  const updatedReps = [...exercise.reps];
                  updatedReps[setIndex] = e.target.value;
                  handleExerciseChange(index, 'reps', updatedReps);
                }}
              />
            ))}
          </div>
        ))}
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
    </div>
  );
}

export default WorkoutPlan;