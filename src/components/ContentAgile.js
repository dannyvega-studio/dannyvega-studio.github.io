import React from 'react';
import ase from '../assets/images/certify/ase.jpg';
import amat from '../assets/images/certify/amat.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import ModalImage from "react-modal-image";

function ContentAgile(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">Agile Certifications</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} xs={6}>
                    <div className="about-skill mb-4"><ModalImage  variant="top" small={ase} large={ase} alt="Agile Scrum Essentials" /></div>
                    <Zoom>
                        <Card.Body>
                            <Card.Title>Agile Scrum Essentials</Card.Title>
                                <Card.Text>
                                    <a href="https://techedge.techcanvass.co/Certificate/MTgxMTQtNDc=/Daniel%20EduardoVega%20Ibarra" target="_blank" rel="noreferrer">Credential 508585</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <div className="about-skill mb-4"><ModalImage  variant="top" small={amat} large={amat} alt="Agile Manual and Automation Testing" /></div>
                    <Zoom>
                        <Card.Body>
                            <Card.Title>Agile Manual and Automation Testing</Card.Title>
                                <Card.Text>
                                    <a href="https://techedge.techcanvass.co/Certificate/MTgxMTQtODE=/Daniel%20EduardoVega%20Ibarra" target="_blank" rel="noreferrer">Credential 592356</a>
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