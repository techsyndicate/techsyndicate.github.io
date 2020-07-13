import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Row, Button } from "react-materialize";

class IndexPage extends Component {
    render(){
        return (
            <>
            <Helmet>
                <title>TS | Home</title>
            </Helmet>
            <div className="landing">
                <div className="landing-title">Robotronics '20</div>
                <div className="landing-date">6th August 2020</div>
                <Row>
                    <Button href="https://ctrl.gq/eventdetails" node="a" waves="light" className="landing-button">Event details</Button><br/>
                    <Button href="https://ctrl.gq/tsdiscord" node="a" waves="light" className="landing-button">Discord</Button>
                </Row>
            </div>
            <br/><br/><br/><br/>
            </>
        )
    }
}

export default IndexPage;