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
                
                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="docker" src={docker} />
                        <Card.Body>
                            <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer" class="about-link"><Card.Title>Docker</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="lightsail" src={lightsail} />
                        <Card.Body>
                            <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/what-is-amazon-lightsail" target="_blank" rel="noreferrer" class="about-link"><Card.Title>AWS Lightsail</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="amplify" src={amplify} />
                        <Card.Body>
                            <a href="https://aws.amazon.com/es/amplify/faqs/" target="_blank" rel="noreferrer" class="about-link"><Card.Title>AWS Amplify</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentSkillsCloud;