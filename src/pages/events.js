import React, { Component } from "react";
import data from "../data/events";
import Card from "../components/card";
import { Helmet } from "react-helmet";

class EventsPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TS | Events</title>
        </Helmet>
        <div
          style={{
            fontSize: "3rem",
            marginTop: "20px",
            color: "#fff",
          }}
        >
          Events
        </div>
        <div className="row flex">
          {data.map((event) => (
            <div className="col l4" key={event.title}>
              <Card
                title={event.title}
                eligibility={event.eligibility}
                participants={event.participants}
                desc={event.description}
                deliverables={event.deliverables}
                prompt={event.prompt}
                details={event.details}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default EventsPage;
