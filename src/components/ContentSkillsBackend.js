import React from 'react';
import php from '../assets/images/skills/php.png';
import javascript from '../assets/images/skills/javascript.png';
import nodejs from '../assets/images/skills/nodejs.png';
import solidity from '../assets/images/skills/solidity.png';
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
                
                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="Javascript" src={javascript} />
                        <Card.Body>
                            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" class="about-link"><Card.Title>Javascript</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="PHP" src={php} />
                        <Card.Body>
                            <a href="https://www.php.net/manual/en/intro-whatis.php" target="_blank" rel="noreferrer" class="about-link"><Card.Title>PHP</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="nodejs" src={nodejs} />
                        <Card.Body>
                            <a href="https://nodejs.org/en/about/" target="_blank" rel="noreferrer" class="about-link"><Card.Title>Node JS</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>

                <Col md={3} sm={4} xs={6}>
                    <Zoom>
                        <Card.Img className="about-skill mb-4" variant="top" alt="solidity" src={solidity} />
                        <Card.Body>
                            <a href="https://docs.soliditylang.org/en/latest/" target="_blank" rel="noreferrer" class="about-link"><Card.Title>Solidity</Card.Title></a>
                        </Card.Body>
                        <Card.Img />
                    </Zoom>
                </Col>
            
            </Row>


        </Container>
    );

}

export default ContentSkillsBackend;