import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Member from '../components/member';
import data from '../data/members.json';

class MembersPage extends Component {
    render(){
        return (
            <Row>
                    {data.map(member => (
                        <Col m={3}>
                            <Member
                              key={member.name}
                              name={member.name}
                              role={member.role}
                              imgurl={member.img}
                            />
                        </Col>
                    ))}
            </Row>
        );
    }
}

export default MembersPage;
