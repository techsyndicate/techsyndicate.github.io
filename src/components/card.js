import React, { Component } from "react";

class Card extends Component {
    render(){
        return (
            <div className="card">
                <div className="card-title">{this.props.title}</div>
                <hr/>
                <div className="eligibility">Eligibility: {this.props.eligibility}</div>
                <div className="participants">Max participants: {this.props.participants}</div>
                <br/>
                <div className="description">{this.props.desc}</div>
            </div>
        )
    }
}

export default Card;