import React, { Component } from "react";
import data from '../data/alumni.json';
import Member from '../components/member';
import { Row, Col } from "react-materialize";

class AlumniPage extends Component {
    render(){
        return (
            <Row>
            {data.map(alumni => (
                <>
                <p>{alumni.batch}</p>
                {alumni.alumni.map(alumnus => (
                    /*<Member
                      key={alumnus.name}
                      name={alumnus.name}
                      role={alumnus.exrole}
                      imgurl={alumnus.image}
                    />*/
                    <>
                    <p>{alumnus.name}</p>
                    <p>{alumnus.exrole}</p>
                    </>
                ))}
                </>
            ))}
            </Row>
        )
    }
}

export default AlumniPage;