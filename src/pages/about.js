import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import { Helmet } from "react-helmet";

class AboutPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TS | About</title>
        </Helmet>
        <Row>
          <div
            style={{
              fontSize: "3rem",
              marginTop: "20px",
              color: "#fff",
            }}
          >
            Tech Syndicate
          </div>
          <Col m={6}>
            <p>
              Established in 2016, Tech Syndicate is the technology club of
              Amity International School, Sector-46, Gurgaon. The club works
              constantly to encourage students to learn new technologies and
              keep up with the rapidly progressing sector of computer science.
              <br />
              <br />
              Through the years, it has tranformed into a family of designers,
              developers, programmers, and filmmakers who dominate their fields.
              The members of the club have won several inter-school, national
              and international events, and have repeatedly brought accolades to
              the school.
              <br />
              <br />
              Robotronics, our annual tech symposium, was first hosted in 2013,
              and has since then been recognized as one of the most prominent
              competitions of the tech circuit. With a plethora of different
              events under it, Robotronics receives participation from 300+
              students across Delhi NCR.
            </p>
          </Col>
          <Col m={5} offset="m1">
            <img
              src="assets/ts3d.png"
              alt="TS 3D"
              className="responsive-img"
              style={{ margin: "0 10px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default AboutPage;
