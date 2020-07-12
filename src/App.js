import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import IndexPage from './pages/index';
import EventsPage from './pages/events';
import MembersPage from './pages/members';
import AlumniPage from './pages/alumni';
import ResourcesPage from './pages/resources';
import PageNotFound from './pages/404';
import RegisterPage from './pages/register';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><div className="container"><IndexPage/></div></Route>
        <Route exact path="/events"><div className="container"><EventsPage/></div></Route>
        <Route exact path="/members"><div className="container"><MembersPage/></div></Route>
        <Route exact path="/alumni"><div className="container"><AlumniPage/></div></Route>
        <Route exact path="/resources"><div className="container"><ResourcesPage/></div></Route>
        <Route component={PageNotFound}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
