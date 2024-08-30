
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './components/styles.css';
import Choice1 from './components/Choice1';
import Choice2 from './components/Choice2';
import Choice3 from './components/Choice3';
const App = () => {
  return (
    <Router>
      <header>
     <div className="align-right"> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <nav>
          <ul>
          <p>THIS IS A BOOKING PAGE</p>
          <ul className="another-right">
            <li>
              <Link to="/Choice1"><button>Deluxe ward</button></Link>
            </li>
            <li>
              <Link to="/Choice2"><button>Special ward</button></Link>
            </li>
            <li>
              <Link to="/Choice3"><button>General ward</button></Link>
            </li>
          </ul>
          </ul>
        </nav>
        </nav>
    </div>  
    </header>
        <Routes>
          <Route path="/Choice1" element={<Choice1/>} />
          <Route path="/Choice2" element={<Choice2 />} />
          <Route path="/Choice3" element={<Choice3 />} />
        </Routes>
    </Router>
  );
};

export default App;