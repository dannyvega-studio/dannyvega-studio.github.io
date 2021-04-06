import React from 'react';
import { Container, Row, Col , Jumbotron} from 'react-bootstrap';

function Hero(props) {

    return(
        <Container>
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                    { props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1> }
                    { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                    { props.text && <h3 className="lead font-weight-bold">{props.text}</h3> }
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;