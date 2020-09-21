import React, { Component } from "react";

class Alumnus extends Component {
  render() {
    return (
      <div className="alumnus">
        <div className="alumnus-info">
          <div className="member-name">{this.props.name}</div>
          <p>Batch: {this.props.batch}</p>
        </div>
        <div className="alumnus-img">
          <img src={this.props.imgurl} alt={this.props.name} />
        </div>
      </div>
    );
  }
}

export default Alumnus;
