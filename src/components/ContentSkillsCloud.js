import React from 'react';
import lightsail from '../assets/images/skills/lightsail.png';
import docker from '../assets/images/skills/docker.png';
import amplify from '../assets/images/skills/amplify.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function ContentSkillsCloud(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">Cloud</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="docker" src={docker} />
                        <Card.Body>
                            <Card.Title>Docker</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="lightsail" src={lightsail} />
                        <Card.Body>
                            <Card.Title>AWS Lightsail</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="amplify" src={amplify} />
                        <Card.Body>
                            <Card.Title>AWS Amplify</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentSkillsCloud;