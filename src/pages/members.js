import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Member from '../components/member';
import data from '../data/members.json';
import Jumbotron from '../components/jumbotron';
import { Helmet } from 'react-helmet';

class MembersPage extends Component {
    render(){
        return (
            <>
            <Helmet>
                <title>TS | Members</title>
            </Helmet>
            <Jumbotron
              title="Members"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat dui ut varius ultricies. Nam fermentum iaculis elit, id rutrum lorem vestibulum et. Aenean ultricies ullamcorper nulla, cursus auctor sapien scelerisque et. Quisque est velit, elementum nec nisl feugiat, vestibulum placerat ligula."
            />
            <Row>
            <div className="member-grid">
                {data.map(member => (
                    <Col l={3} key={member.name}>
                        <Member
                          name={member.name}
                          role={member.role}
                          imgurl={member.image}
                        />
                    </Col>
                ))}
                </div>
            </Row>
            </>
        );
    }
}

export default MembersPage;
