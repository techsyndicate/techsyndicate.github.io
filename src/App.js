import React from 'react';
import './App.css';
import MembersPage from './pages/members';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Icon, NavItem } from "react-materialize";
import AlumniPage from './pages/alumni';
import EventsPage from './pages/events';
import IndexPage from './pages/index';

function App() {
  return (
    <Router>
      <Navbar
        alignLinks="right"
        brand={<Link to="/"><img src="https://github.com/techsyndicate.png" alt="Tech Syndicate" height="60px" width="60px"/></Link>}
        id="mobile-nav"
        menuIcon="Menu"
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem><Link to="/events">Events</Link></NavItem>
        <NavItem><Link to="/members">Members</Link></NavItem>
        <NavItem><Link to="/alumni">Alumni</Link></NavItem>
      </Navbar>

      <Switch>
        <Route path="/members"><div className="container"><MembersPage/></div></Route>
        <Route path="/alumni"><div className="container"><AlumniPage/></div></Route>
        <Route path="/events"><div className="container"><EventsPage/></div></Route>
        <Route exact path="/"><div className="container"><IndexPage/></div></Route>
      </Switch>
    </Router>
  );
}

export default App;
