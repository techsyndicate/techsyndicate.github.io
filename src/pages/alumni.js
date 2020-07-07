import React, { Component } from "react";
import data from '../data/alumni.json';
import { Row } from "react-materialize";
import Jumbotron from "../components/jumbotron";

class AlumniPage extends Component {
    render(){
        return (
            <>
            <Jumbotron
              title="Alumni"
              desc="Exun’s members form an elite team of technology enthusiasts, with skills ranging from design and programming to quizzing and hardware."
            />
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
            </>
        )
    }
}

export default AlumniPage;