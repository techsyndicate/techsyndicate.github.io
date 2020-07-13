import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import data from "../data/events";
import Card from "../components/card";
import Jumbotron from "../components/jumbotron";
import { Helmet } from "react-helmet";

class EventsPage extends Component {
    render(){
        return (
            <>
            <Helmet>
                <title>TS | Events</title>
            </Helmet>
            <Jumbotron
              title="Events"
              desc="Robotronics '20 has a total of 12 events. All the events add up to the final score for the overall winner."
            />
            <Row>
                {data.map(event => (
                    <Col l={4} key={event.title}>
                        <Card
                          title={event.title}
                          eligibility={event.eligibility}
                          participants={event.participants}
                          desc={event.description}
                          deliverables={event.deliverables}
                          prompt={event.prompt}
                          details={event.details}
                        />
                    </Col>
                ))}
            </Row>
            </>
        )
    }
}

export default EventsPage;