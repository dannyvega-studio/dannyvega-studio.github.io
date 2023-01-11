import React from 'react';
import html from '../assets/images/skills/html.png';
import css from '../assets/images/skills/css.png';
import javascript from '../assets/images/skills/javascript.png';
import reactjs from '../assets/images/skills/reactjs.png';
import tailwind from '../assets/images/skills/tailwind.png';
import sass from '../assets/images/skills/sass.png';
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
                
                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="html" src={html} />
                        <Card.Body>
                            <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" target="_blank" rel="noreferrer" class="about-link"><Card.Title>HTML</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
                
                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="css" src={css} />
                        <Card.Body>
                            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS" target="_blank" rel="noreferrer" class="about-link"><Card.Title>CSS</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="tailwind" src={tailwind} />
                        <Card.Body>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" class="about-link"><Card.Title>Tailwind CSS</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="sass" src={sass} />
                        <Card.Body>
                            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer" class="about-link"><Card.Title>SASS</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="javascript" src={javascript} />
                        <Card.Body>
                            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" class="about-link"><Card.Title>Javascript</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="reactjs" src={reactjs} />
                        <Card.Body>
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" class="about-link"><Card.Title>React JS</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

            </Row>

        </Container>
    );

}

export default ContentSkillsFrontend;