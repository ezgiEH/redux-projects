import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuotesDetail from './pages/QuotesDetail';


function App() {
  return (
    <Router>
      <nav className='Nav'>
        <Link to="/">Home</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quote_id" element={<QuotesDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
