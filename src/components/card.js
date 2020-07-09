import React, { Component } from "react";

class Card extends Component {
    render(){
        return (
            <div className="card">
                <div className="member-name">{this.props.title}</div>
                <div className="eligibility">{this.props.eligibility}</div>
                <div className="participants">Max participants: {this.props.participants}</div>
                <div className="description">{this.props.desc}</div>
            </div>
        )
    }
}

export default Card;