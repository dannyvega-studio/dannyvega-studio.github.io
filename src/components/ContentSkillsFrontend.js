import React from 'react';
import html from '../assets/images/skills/html.png';
import css from '../assets/images/skills/css.png';
import javascript from '../assets/images/skills/javascript.png';
import reactjs from '../assets/images/skills/reactjs.png';
import tailwind from '../assets/images/skills/tailwind.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function ContentSkillsFrontend(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">Frontend</h1>
                </Col>
            </Row>
            
            <Row className="justify-content-center mt-4">
                
                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="html" src={html} />
                        <Card.Body>
                            <Card.Title>HTML</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
                
                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="css" src={css} />
                        <Card.Body>
                            <Card.Title>CSS</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="javascript" src={javascript} />
                        <Card.Body>
                            <Card.Title>Javascript</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="reactjs" src={reactjs} />
                        <Card.Body>
                            <Card.Title>React JS</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="tailwind" src={tailwind} />
                        <Card.Body>
                            <Card.Title>Tailwind CSS</Card.Title>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

            </Row>

        </Container>
    );

}

export default ContentSkillsFrontend;