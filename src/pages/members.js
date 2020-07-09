import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Member from '../components/member';
import data from '../data/members.json';
import Jumbotron from '../components/jumbotron';

class MembersPage extends Component {
    render(){
        return (
            <>
            <Jumbotron
              title="Members"
              desc="Exun’s members form an elite team of technology enthusiasts, with skills ranging from design and programming to quizzing and hardware."
            />
            <Row>
                {data.map(member => (
                    <Col m={3} s={12} key={member.name}>
                        <Member
                          key={member.name}
                          name={member.name}
                          role={member.role}
                          imgurl={member.img}
                        />
                    </Col>
                ))}
            </Row>
            </>
        );
    }
}

export default MembersPage;
