import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome To Luncher
          </h1>
          <nav>
            <a>
              <Link to="/login">Login </Link>
            </a>
            <a>
              Sign Up
            </a>
          </nav>
        </header>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
