import React from 'react';
import sfc from '../assets/images/certify/b2c.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import ModalImage from "react-modal-image";

function ContentSalesforce(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4 mb-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">Salesforce Certifications</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} xs={6}>
                    <div className="about-skill mb-4"><ModalImage  variant="top" small={sfc} large={sfc} alt="B2C Commerce Developer" /></div>
                    <Zoom>
                        <Card.Body>
                            <Card.Title>B2C Commerce Developer Certificated</Card.Title>
                                <Card.Text>
                                    <a href="https://sforce.co/verifycerts" target="_blank" rel="noreferrer">Credential 22529413</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentSalesforce;