import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WorkoutSplit() {
  const [selectedSplit, setSelectedSplit] = useState('');
  const [customSplit, setCustomSplit] = useState('');
  const navigate = useNavigate();

  const handleSplitSelection = (split) => {
    setSelectedSplit(split);
  };

  const handleCustomSplit = (e) => {
    setCustomSplit(e.target.value);
  };

  const handleSubmit = () => {
    const finalSplit = customSplit || selectedSplit;
    navigate('/workout-plan', { state: { split: finalSplit } });
  };

  return (
    <div className="WorkoutSplit">
      <h1>Select Your Workout Split</h1>
      <div>
        <button onClick={() => handleSplitSelection('Push, Pull, Legs')}>Push, Pull, Legs</button>
        <button onClick={() => handleSplitSelection('Upper/Lower')}>Upper/Lower</button>
        <button onClick={() => handleSplitSelection('Bro Split')}>Bro Split</button>
        <button onClick={() => handleSplitSelection('ULPPL')}>ULPPL</button>
      </div>
      <div>
        <h2>Or Create a Custom Split</h2>
        <input
          type="text"
          placeholder="Enter custom split"
          value={customSplit}
          onChange={handleCustomSplit}
        />
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default WorkoutSplit;