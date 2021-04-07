import React from 'react';
import ase from '../assets/images/ase.jpg';
import amat from '../assets/images/amat.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function ContentAgile(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">My Agile Certifications</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} sm={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="ASE" src={ase} />
                        <Card.Body>
                            <Card.Title>Agile Scrum Essentials</Card.Title>
                                <Card.Text>
                                    508585
                                </Card.Text>
                                <Card.Text>
                                    <a href="https://techedge.techcanvass.co/Certificate/MTgxMTQtNDc=/Daniel%20EduardoVega%20Ibarra" target="_blank">View Credential</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} sm={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="AMAT" src={amat} />
                        <Card.Body>
                            <Card.Title>Agile Manual and Automation Testing</Card.Title>
                                <Card.Text>
                                    592356
                                </Card.Text>
                                <Card.Text>
                                    <a href="https://techedge.techcanvass.co/Certificate/MTgxMTQtODE=/Daniel%20EduardoVega%20Ibarra" target="_blank">View Credential</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentAgile;