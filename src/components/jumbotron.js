import React, { Component } from "react";

class Jumbotron extends Component {
    render(){
        return (
            <div className="jumbotron">
                <h3>{this.props.title}</h3>
                <span>{this.props.desc}</span>
            </div>
        )
    }
}

export default Jumbotron;