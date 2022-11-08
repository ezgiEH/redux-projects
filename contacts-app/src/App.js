import Contacts from './components/Contacts';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './components/Contacts/Edit';

function App() {
  return (
    <div className="App">
      <div id='container'>
        <Router>
          <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/edit/:id" element={<Edit />} />
          </Routes> 
          </Router>
      </div>
    </div>
  );
}

export default App;
