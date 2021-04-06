import React from 'react';
import utn from '../assets/images/utn.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function ContentSchool(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">My University Degrees</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} sm={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="UTN" src={utn} />
                        <Card.Body>
                            <Card.Title>TIC University Superior Technician</Card.Title>
                                <Card.Text>
                                    8989132
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} sm={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="UTN" src={utn} />
                        <Card.Body>
                            <Card.Title>TIC Enginer</Card.Title>
                                <Card.Text>
                                    To be continue...
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentSchool;