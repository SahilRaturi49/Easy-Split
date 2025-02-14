import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/select-split">Select Split</Link>
      <Link to="/workout-plan">Workout Plan</Link>
      <Link to="/progress-report">Progress Report</Link>
    </nav>
  );
}

export default Navbar;