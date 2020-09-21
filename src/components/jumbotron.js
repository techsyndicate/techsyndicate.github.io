import React, { Component } from "react";
import { Col } from "react-materialize";

class Jumbotron extends Component {
  render() {
    return (
      <div className="row">
        <Col m={8}>
          <div className="jumbotron">
            <div className="title">{this.props.title}</div>
            <span>{this.props.desc}</span>
          </div>
        </Col>
      </div>
    );
  }
}

export default Jumbotron;
