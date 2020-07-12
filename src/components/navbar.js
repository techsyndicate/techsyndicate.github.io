import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';

class Navbar extends Component {
    render(){
        return (
            <>
            <nav>
                <div className="nav-wrapper">
                <Link to="/"><span className="brand-logo"><img src="/assets/techsyndicate.png" alt="TS" height="50px" width="50px"/></span></Link>
                <span className="sidenav-trigger hide-on-large-only" data-target="slide-out"><Icon>menu</Icon></span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><Link to="/events">Events</Link></li>
                      <li><Link to="/members">Members</Link></li>
                      <li><Link to="/alumni">Alumni</Link></li>
                      <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </div>
          </nav>
          <ul className="sidenav" id="slide-out">
            <li><Link className="sidenav-close" to="/events">Events</Link></li>
            <li><Link className="sidenav-close" to="/members">Members</Link></li>
            <li><Link className="sidenav-close" to="/alumni">Alumni</Link></li>
            <li><Link className="sidenav-close" to="/resources">Resources</Link></li>
          </ul>
          </>
        )
    }
}

export default Navbar;