import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";

class IndexPage extends Component {
    render(){
        return (
            <Jumbotron
              title="Tech Syndicate"
              desc="Amazing club, amazing website; don't tell Exun Clan please thanks goodbye"
            />
        )
    }
}

export default IndexPage;