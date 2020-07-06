import React from 'react';
import './App.css';
import MembersPage from './pages/members';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlumniPage from './pages/alumni';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/members"><div className="container"><MembersPage/></div></Route>
        <Route path="/alumni"><div className="container"><AlumniPage/></div></Route>
        <Route exact path="/"><p>Hello, you're at index</p></Route>
      </Switch>
    </Router>
  );
}

export default App;
