import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import data from "../data/events.json";
import Jumbotron from "../components/jumbotron";

class EventsPage extends Component {
    render(){
        return (
            <>
            <Jumbotron
              title="Events"
              desc="Bigger and better than ever before.
Exun has been organizing its flagship event for two decades. With Exun 2019, we continued its legacy as a national event open to participants from around the country."
            />
            <Row>
                {data.map(event => (
                    <Col m={4}>
                        <div className="event-card">
                            <span className="event-name">{event.title}</span>
                            <p><strong>Eligibility: {event.eligibility}</strong></p>
                            <p>{event.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
            </>
        )
    }
}

export default EventsPage;