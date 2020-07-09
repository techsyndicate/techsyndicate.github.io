import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";

class IndexPage extends Component {
    render(){
        return (
            <Jumbotron
              title="Tech Syndicate"
              desc="Robotronics '20 - Aug 6th, 2020"
            />
        )
    }
}

export default IndexPage;