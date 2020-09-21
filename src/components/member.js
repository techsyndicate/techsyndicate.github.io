import React, { Component } from "react";

class Member extends Component {
  render() {
    return (
      <div className="member">
        <img
          className="responsive-img member-img"
          src={this.props.imgurl}
          alt={this.props.name}
        />
        <div className="member-content">
          <a href={this.props.web} target="_blank" rel="noopener noreferrer">
            <span className={this.props.css}>
              <div className="member-name">{this.props.name}</div>
            </span>
          </a>
          <p>{this.props.role}</p>
        </div>
      </div>
    );
  }
}

export default Member;
