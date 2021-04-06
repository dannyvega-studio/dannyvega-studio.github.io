import React from 'react';
import sfc from '../assets/images/sfc.jpg';
import smm from '../assets/images/smm.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function ContentScrum(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">My Scrum Certifications</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} sm={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="SFC" src={sfc} />
                        <Card.Body>
                            <Card.Title>Scrum Fundamentals Certificated</Card.Title>
                                <Card.Text>
                                    813572
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} sm={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="SMM" src={smm} />
                        <Card.Body>
                            <Card.Title>Scrum Master Introduction</Card.Title>
                                <Card.Text>
                                    DIPLOMA
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentScrum;