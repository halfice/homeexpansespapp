import React from 'react';
import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Expanse from './component/expanse';
function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <Route exact path='/' component={Expanse} />
        </div>
      </Router>
    </div>
  );
}

export default App;
