import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import { Helmet } from "react-helmet";

class PageNotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TS | 404 Not Found</title>
        </Helmet>
        <div className="container pagenotfound">
          <Jumbotron
            title="404 Not Found"
            desc="The page you're looking for may have been moved or is no longer available."
          />
        </div>
      </>
    );
  }
}

export default PageNotFound;
