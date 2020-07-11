import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-materialize';
import Jumbotron from '../components/jumbotron';
import data from '../data/resources';

class ResourcesPage extends Component {
    render(){
        return (
            <>
            <Helmet>
                <title>TS | Resources</title>
            </Helmet>
            <Jumbotron
                title="Learning Resources"
                desc="Tech Syndicate has members specializing in different fields, ranging from A/V Editing to Web Development. We have collated some learning resources for any newcomer who wishes to learn. These will give you a brief overview of the different fields and help you focus on the most vital aspects of the same."
            />
            <Row>
            {data.map(resource => (
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <Col l={4}>
                    <div className="resource">
                        <div className="resource-name">{resource.field}</div>
                    </div>
                    </Col>
                </a>
            ))}
            </Row><br/>
            </>
        )
    }
}

export default ResourcesPage;