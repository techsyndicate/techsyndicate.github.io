import React from 'react';
import './App.css';
import MembersPage from './pages/members';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AlumniPage from './pages/alumni';
import EventsPage from './pages/events';
import IndexPage from './pages/index';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/members"><div className="container"><MembersPage/></div></Route>
        <Route exact path="/alumni"><div className="container"><AlumniPage/></div></Route>
        <Route exact path="/events"><div className="container"><EventsPage/></div></Route>
        <Route exact path="/"><div className="container"><IndexPage/></div></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
