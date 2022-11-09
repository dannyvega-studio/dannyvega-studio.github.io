import React from 'react';
import utn from '../assets/images/certify/utn.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import ModalImage from "react-modal-image";

function ContentSchool(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">University Degrees</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} xs={6}>
                    <div className="about-skill mb-4"><ModalImage  variant="top" small={utn} large={utn} alt="TIC University Superior Technician" /></div>
                    <Zoom>
                        <Card.Body>
                            <Card.Title>TIC University Superior Technician</Card.Title>
                                <Card.Text>
                                    <a href="https://www.buholegal.com/8989132/" target="_blank" rel="noreferrer">Credential 8989132</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <div className="about-skill mb-4"><ModalImage  variant="top" small={utn} large={utn} alt="TIC Software Enginer" /></div>
                    <Zoom>
                        <Card.Body>
                            <Card.Title>TIC Software Enginer</Card.Title>
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

export default ContentSchool;