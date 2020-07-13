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
              desc="Tech Syndicate is the technology club of Amity International School, Sector 46, Gurgaon. It has members specializing in diverse fields, from A/V Editing and Web Development to Cryptic Hunts and Design."
            />
            <Row>
            <div className="member-grid">
                {data.map(member => (
                    <Col l={3} key={member.name}>
                        <Member
                          name={member.name}
                          role={member.role}
                          imgurl={member.image}
                          web={member.social["website"]}
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
