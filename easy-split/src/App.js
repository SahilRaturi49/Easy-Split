import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import WorkoutSplit from './components/WorkoutSplit.js';
import WorkoutPlan from './components/WorkoutPlan.js';
import ProgressReport from './components/ProgressReport.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-split" element={<WorkoutSplit />} />
          <Route path="/workout-plan" element={<WorkoutPlan />} />
          <Route path="/progress-report" element={<ProgressReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;