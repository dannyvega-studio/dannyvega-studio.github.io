import React from 'react';
import Card from './CardPortfolio';
import montblanc from '../assets/images/portfolio/montblanc.png';
import hybrick from '../assets/images/portfolio/hybrick.png';
import novels from '../assets/images/portfolio/lightnovel.png';
import { Container, Row } from 'react-bootstrap';

class CarouselPortfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Montblanc',
                    subTitle: 'Montblanc Arab Ecommerce',
                    role: 'Role: Salesforce Developer',
                    environment: 'Environment: Salesforce',
                    imgSrc: montblanc,
                    link: 'https://www.montblanc.com/en-ae',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Hybrick',
                    subTitle: 'Real State Trade by Cryptocurrency',
                    role: 'Role: Cloud Developer JR',
                    environment: 'Environment: Amazon Web Services',
                    imgSrc: hybrick,
                    link: 'https://hybrick.cloudmex.io/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Light Novels',
                    subTitle: '¡Sharing my hobby!',
                    role: 'Role: Web Developer',
                    environment: 'Environment: React',
                    imgSrc: novels,
                    link: 'https://dannyvega-studio.github.io/light-novel/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default CarouselPortfolio;