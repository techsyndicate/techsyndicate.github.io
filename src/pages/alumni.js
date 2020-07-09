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
              desc="Exun’s members form an elite team of technology enthusiasts, with skills ranging from design and programming to quizzing and hardware."
            />
            <Row>
                {data.map(alumnus => (
                    <Col m={3} s={12} key={Member.name}>
                        <Member
                          key={alumnus.name}
                          name={alumnus.name}
                          role={alumnus.batch}
                          imgurl={alumnus.image}
                        />
                    </Col>
                ))}
            </Row>
            </>
        )
    }
}

export default AlumniPage;