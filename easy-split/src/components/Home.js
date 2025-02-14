import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Workout Tracker</h1>
      <button onClick={() => navigate('/select-split')}>Get Started</button>
    </div>
  );
}

export default Home;