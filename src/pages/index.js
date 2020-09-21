import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Button } from "react-materialize";

class IndexPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TS | Home</title>
        </Helmet>
        <Row style={{ height: "75vh" }}>
          <Col m={6}>
            <h3>Robotronics '20</h3>
            <h5>26th July to 6th August</h5>
            <p>
              Robotronics 2020, the 7th edition of Tech Syndicate's annual
              event, which saw participation from over 300+ students from 35
              schools and 40+ individual teams across Delhi NCR, was an
              astounding success.
              <br />
              <br />
              Participants across events exhibited their creativity by proposing
              solutions to societal problems, rebranding a fictional company,
              solving tasks of cryptography and steganography, and debating on
              topics like privatisation of NASA programs and the use of AI/ML to
              replace human judgement.
              <br />
              <br />
              Delhi Public School, R.K. Puram's Exun Clan emerged as the overall
              winners.
            </p>
            <Button
              href="https://ctrl.gq/tsdiscord"
              node="a"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }}
              className="landing-button"
            >
              Discord
            </Button>
            <Button
              href="https://ctrl.gq/results"
              node="a"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-button"
            >
              Results
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default IndexPage;
