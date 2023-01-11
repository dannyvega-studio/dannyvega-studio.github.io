import React from 'react';
import Card from './CardPortfolio';
import hybrick from '../assets/images/portfolio/hybrick.png';
import montblanc from '../assets/images/portfolio/montblanc.png';
import converse from '../assets/images/portfolio/converse.png';
import cartier from '../assets/images/portfolio/cartier.png';
import honey from '../assets/images/portfolio/honey.png';
import thebay from '../assets/images/portfolio/thebay.png';
import theref from '../assets/images/portfolio/ref.png';
import { Container, Row } from 'react-bootstrap';

class CarouselPortfolio extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    imgSrc: theref,
                    title: 'The Reformation',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    link: 'https://www.thereformation.com/',
                    selected: false
                },
                {
                    id: 1,
                    imgSrc: thebay,
                    title: 'The Bay',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    link: 'https://www.thebay.com/',
                    selected: false
                },
                {
                    id: 2,
                    imgSrc: honey,
                    title: 'Honey Birdette',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Main Environment: Salesforce SFRA',
                    environment2: 'Secondary Environment: SFCC Administrator',
                    link: 'https://us.honeybirdette.com/',
                    selected: false
                },
                {
                    id: 3,
                    imgSrc: cartier,
                    title: 'Cartier KO',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    link: 'https://www.cartier.com/ko-kr/home',
                    selected: false
                },
                {
                    id: 4,
                    imgSrc: converse,
                    title: 'Converse CA',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    link: 'https://converse.ca/',
                    selected: false
                },
                {
                    id: 5,
                    imgSrc: montblanc,
                    title: 'Montblanc AE',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    link: 'https://www.montblanc.com/en-ae',
                    selected: false
                },
                {
                    id: 6,
                    imgSrc: hybrick,
                    title: 'Hybrick',
                    role1: 'Main Role: Cloud Developer JR',
                    role2: 'Secondary Role: Blockchain Developer JR',
                    environment: 'Environment: Amazon Web Services',
                    link: 'https://hybrick.cloudmex.io/',
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