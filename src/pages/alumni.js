import React, { Component } from "react";
import data from '../data/alumni.json';
import { Row, Col } from "react-materialize";
import Jumbotron from '../components/jumbotron';
import Member from '../components/member';

class AlumniPage extends Component {
    render(){
        return (
            <>
            <Jumbotron
              title="Alumni"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat dui ut varius ultricies. Nam fermentum iaculis elit, id rutrum lorem vestibulum et. Aenean ultricies ullamcorper nulla, cursus auctor sapien scelerisque et. Quisque est velit, elementum nec nisl feugiat, vestibulum placerat ligula."
            />
            <Row>
                {data.map(batch => (
                    <>
                    <h4>{batch.batch}</h4>
                    <Row>
                    {batch.alumni.map(alumnus => (
                        <Col m={3} s={12} key={alumnus.name}>
                        <Member
                          name={alumnus.name}
                          role={alumnus.exrole}
                          imgurl={alumnus.image}
                        />
                        </Col>
                    ))}
                    </Row>
                    </>
                ))}
            </Row>
            </>
        )
    }
}

export default AlumniPage;