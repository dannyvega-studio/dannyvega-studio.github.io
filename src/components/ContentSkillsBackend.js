import React from 'react';
import php from '../assets/images/skills/php.png';
import javascript from '../assets/images/skills/javascript.png';
import nodejs from '../assets/images/skills/nodejs.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function ContentSkillsBackend(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">Backend</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="Javascript" src={javascript} />
                        <Card.Body>
                            <Card.Title>Javascript</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="PHP" src={php} />
                        <Card.Body>
                            <Card.Title>PHP</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="nodejs" src={nodejs} />
                        <Card.Body>
                            <Card.Title>Node JS</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentSkillsBackend;