import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import { Helmet } from "react-helmet";

class IndexPage extends Component {
    render(){
        return (
            <>
            <Helmet>
                <title>TS | Home</title>
            </Helmet>
            <Jumbotron
              title="Tech Syndicate"
              desc="Robotronics '20 - Aug 6th, 2020"
            />
            </>
        )
    }
}

export default IndexPage;