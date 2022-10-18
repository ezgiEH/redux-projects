import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <nav className='Nav'>
        <Link to="/">Home</Link>
        <Link to="/detail">Detail</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
