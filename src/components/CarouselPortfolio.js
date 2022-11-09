import React from 'react';
import Card from './CardPortfolio';
import montblanc from '../assets/images/portfolio/montblanc.png';
import hybrick from '../assets/images/portfolio/hybrick.png';
import cartier from '../assets/images/portfolio/cartier.png';
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
                    title: 'The Reformation',
                    role: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce',
                    imgSrc: theref,
                    link: 'https://www.thereformation.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'The Bay',
                    role: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce',
                    imgSrc: thebay,
                    link: 'https://www.thebay.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Cartier KO',
                    role: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce',
                    imgSrc: cartier,
                    link: 'https://www.cartier.com/ko-kr/home',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Montblanc AE',
                    subTitle: 'Creating new heights',
                    role: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce',
                    imgSrc: montblanc,
                    link: 'https://www.montblanc.com/en-ae',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Hybrick',
                    subTitle: 'Real State Trade by Cryptocurrency',
                    role: 'Role: Cloud Developer JR',
                    environment: 'Environment: Amazon Web Services',
                    imgSrc: hybrick,
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