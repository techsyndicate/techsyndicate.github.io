import React, { Component } from "react";
import data from "../data/alumni.json";
import { Row, Col } from "react-materialize";
import Member from "../components/member";
import { Helmet } from "react-helmet";

class AlumniPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TS | Alumni</title>
        </Helmet>
        <div
          style={{
            fontSize: "3rem",
            marginTop: "20px",
            color: "#fff",
          }}
        >
          Alumni
        </div>
        <Row>
          {data.map((batch) => (
            <>
              <div className="alumni-grid">
                <h4>{batch.batch}</h4>
                <Row>
                  {batch.alumni.map((alumnus) => (
                    <Col l={3} key={alumnus.name}>
                      <Member
                        name={alumnus.name}
                        role={alumnus.exrole}
                        imgurl={alumnus.image}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </>
          ))}
        </Row>
      </>
    );
  }
}

export default AlumniPage;
