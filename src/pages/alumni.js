import React, { Component } from "react";
import data from '../data/alumni.json';
import { Row, Col } from "react-materialize";
import Jumbotron from '../components/jumbotron';
import Member from '../components/member';
import { Helmet } from "react-helmet";

class AlumniPage extends Component {
    render(){
        return (
            <>
            <Helmet>
                <title>TS | Alumni</title>
            </Helmet>
            <Jumbotron
              title="Alumni"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat dui ut varius ultricies. Nam fermentum iaculis elit, id rutrum lorem vestibulum et. Aenean ultricies ullamcorper nulla, cursus auctor sapien scelerisque et. Quisque est velit, elementum nec nisl feugiat, vestibulum placerat ligula."
            />
            <Row>
                {data.map(batch => (
                    <>
                    <div className="alumni-grid">
                    <h4>{batch.batch}</h4>
                    <Row>
                        {batch.alumni.map(alumnus => (
                            <Col l={3} key={alumnus.name}>
                                <Member
                                  name={alumnus.name}
                                  role={alumnus.exrole}
                                  imgurl={alumnus.image}
                                />
                            </Col>
                        ))}
                    </Row>
                    </div>
                    </>
                ))}
            </Row>
            </>
        )
    }
}

export default AlumniPage;