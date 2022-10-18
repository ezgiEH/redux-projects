import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <nav className='Nav'>
        <Link to="/">Home</Link>
        <Link to="/detail">Detail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
