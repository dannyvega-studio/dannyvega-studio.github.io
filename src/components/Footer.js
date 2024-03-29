import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaUser, FaIdCard, FaSalesforce } from 'react-icons/fa';
import Iframe from 'react-iframe'

function Footer() {

    return(
        <footer>
            <Container>
                <Row className="border-top justify-content-between p-3">

                    <Col className="p-0 d-flex flex-column justify-content-center mt-3 mb-3" lg={4} md={6} xs={12}>
                        <p class="mb-4"><FaUser className="ml-3 mr-3" /> Follow Me: </p>
                        <p><a href="https://www.linkedin.com/in/daniel-vega-95347a1ba/" target="_blank" rel="noreferrer" class="mr-2">
                            <FaLinkedin className="linkedin-icon" />
                        </a> 
                        <a href="https://www.linkedin.com/in/daniel-vega-95347a1ba/" target="_blank" rel="noreferrer" class="contact-link">Linkedin</a></p>
                        <p><a href="https://trailblazer.me/id/dvega28" target="_blank" rel="noreferrer" class="mr-2">
                            <FaSalesforce className="salesforce-icon" />
                        </a> 
                        <a href="https://trailblazer.me/id/dvega28" target="_blank" rel="noreferrer" class="contact-link">Trailhead</a></p>
                        <p><a href="https://github.com/Danielvega-studio" target="_blank" rel="noreferrer" class="mr-2">
                            <FaGithubSquare className="github-icon" />
                        </a> 
                        <a href="https://github.com/Danielvega-studio" target="_blank" rel="noreferrer" class="contact-link">Github</a></p>
                    </Col>

                    <Col className="p-0 d-flex flex-column justify-content-center mt-3 mb-3" lg={4} md={6} xs={12}>
                            <p><h4><FaIdCard className="ml-3 mr-3" /> CONTACT ME: </h4></p>
                            <p>Phone: (+52) 311-189-66-80</p>
                            <p>Mail me! just click right <a href="mailto:Danielvega13579@gmail.com?Subject=Interesado%20en%20sus%20Servicios" class="contact-mail">HERE</a></p>
                            
                    </Col>

                    <Col className="p-0 d-flex justify-content-center mt-3 mb-3 text-center" lg={4} md={12} xs={12}>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.88477253907!2d-104.89464588541317!3d21.51223287647378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427370029d27de3%3A0xad026ce15efcdbfd!2sPlaza%20Principal%2C%20Centro%2C%2063000%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1593552790935!5m2!1ses-419!2smx" 
                            width="320" 
                            height="220" 
                            frameborder="0"  
                            allowfullscreen="" 
                            aria-hidden="false" 
                            tabindex="0"></Iframe>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;