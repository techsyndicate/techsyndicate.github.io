import React, { Component } from 'react';
import db from '../firebase';
import { Row, Col } from 'react-materialize';
import Member from '../components/member';

class MembersPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            members: [],
        };
    }

    componentDidMount(){
        db.collection('members')
          .get()
          .then(querySnapshot => {
              const data = querySnapshot.docs.map(doc => doc.data());
              this.setState({ members: data });
          });
    }

    render(){
        return (
            <Row>
                    {this.state.members.map(member => (
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
