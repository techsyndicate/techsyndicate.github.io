import React, { Component } from "react";

class Jumbotron extends Component {
    render(){
        return (
            <div className="jumbotron">
                <div className="title">{this.props.title}</div>
                <span>{this.props.desc}</span>
            </div>
        )
    }
}

export default Jumbotron;