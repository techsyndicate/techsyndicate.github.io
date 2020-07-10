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
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat dui ut varius ultricies. Nam fermentum iaculis elit, id rutrum lorem vestibulum et. Aenean ultricies ullamcorper nulla, cursus auctor sapien scelerisque et. Quisque est velit, elementum nec nisl feugiat, vestibulum placerat ligula."
            />
            <Row>
                {data.map(member => (
                    <Col key={member.name}>
                        <Member
                          name={member.name}
                          role={member.role}
                          imgurl={member.image}
                        />
                    </Col>
                ))}
            </Row>
            </>
        );
    }
}

export default MembersPage;
