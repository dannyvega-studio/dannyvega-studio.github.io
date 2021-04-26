import React from 'react';
import mongodb from '../assets/images/skills/mongodb.png';
import mysql from '../assets/images/skills/mysql.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function ContentSkillsDB(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">My Database Skills</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="mongoDB" src={mongodb} />
                        <Card.Body>
                            <Card.Title>MongoDB</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="MySQL" src={mysql} />
                        <Card.Body>
                            <Card.Title>MySQL</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentSkillsDB;