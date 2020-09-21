import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Member from "../components/member";
import data from "../data/members";
import { Helmet } from "react-helmet";

class MembersPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TS | Members</title>
        </Helmet>
        <div
          style={{
            fontSize: "3rem",
            margin: "20px 0",
            color: "#fff",
          }}
        >
          Members
        </div>
        <Row>
          <div className="member-grid">
            {data.map((member) => (
              <Col l={3} key={member.name}>
                <Member
                  name={member.name}
                  role={member.role}
                  imgurl={member.image}
                  css={member.css}
                  web={member.website}
                />
              </Col>
            ))}
          </div>
        </Row>
      </>
    );
  }
}

export default MembersPage;
