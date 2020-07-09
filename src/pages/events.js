import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import data from "../data/events.json";
import Card from "../components/card";
import Jumbotron from "../components/jumbotron";

class EventsPage extends Component {
    render(){
        return (
            <>
            <Jumbotron
              title="Events"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat dui ut varius ultricies. Nam fermentum iaculis elit, id rutrum lorem vestibulum et. Aenean ultricies ullamcorper nulla, cursus auctor sapien scelerisque et. Quisque est velit, elementum nec nisl feugiat, vestibulum placerat ligula."
            />
            <Row>
                {data.map(event => (
                    <Col m={4} key={event.title}>
                        <Card
                          title={event.title}
                          eligibility={event.eligibility}
                          participants={event.participants}
                          desc={event.description}
                        />
                    </Col>
                ))}
            </Row>
            </>
        )
    }
}

export default EventsPage;