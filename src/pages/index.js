import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Row, Col } from "react-materialize";

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
                    <Col m={12}><a href="https://ctrl.gq/eventdetails"><div className="prompt-button">Event Details</div></a></Col><br/><br/>
                    <Col m={12}><a href="https://ctrl.gq/tsdiscord"><div className="prompt-button discord">Discord</div></a></Col>
                </Row>
            </div>
            <br/><br/><br/><br/>
            </>
        )
    }
}

export default IndexPage;