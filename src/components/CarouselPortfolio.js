import React from 'react';
import Card from './CardPortfolio';
import hybrick from '../assets/images/portfolio/hybrick.png';
import montblanc from '../assets/images/portfolio/montblanc.png';
import converse from '../assets/images/portfolio/converse.png';
import cartier from '../assets/images/portfolio/cartier.png';
import honey from '../assets/images/portfolio/honey.png';
import thebay from '../assets/images/portfolio/thebay.png';
import theref from '../assets/images/portfolio/ref.png';
import delta from '../assets/images/portfolio/delta.png';
import { Container, Row } from 'react-bootstrap';

class CarouselPortfolio extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    imgSrc: delta,
                    title: 'Delta Faucet',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    description: 'Description: Anti Froud implementation using Forter integration to apply additional protection for checkout process',
                    link: 'https://www.deltafaucet.com/',
                    selected: false
                },
                {
                    id: 1,
                    imgSrc: theref,
                    title: 'The Reformation',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    description: 'Description: Site Speed improvement to give a better experience with fastest page loads',
                    link: 'https://www.thereformation.com/',
                    selected: false
                },
                {
                    id: 2,
                    imgSrc: thebay,
                    title: 'The Bay',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    description: 'Description: Bug fixing for checkout issues with multiple payment methods mainly focused on PWP points, Credit Cards and Gift Points',
                    link: 'https://www.thebay.com/',
                    selected: false
                },
                {
                    id: 3,
                    imgSrc: honey,
                    title: 'Honey Birdette',
                    role1: 'Role: B2C Salesforce Developer',
                    role2: 'Role: SFCC Administrator',
                    environment: 'Enviroment: Salesforce SFRA',
                    description: 'Description: Management of Products, Variations, Product Sets and creation of permission sets for different user profiles',
                    link: 'https://us.honeybirdette.com/',
                    selected: false
                },
                {
                    id: 4,
                    imgSrc: cartier,
                    title: 'Cartier KO',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    description: 'Description: Implementation of a payment method only supported in Korea, Korean Cyber Payment (KCP), also template and translation fixing.',
                    link: 'https://www.cartier.com/ko-kr/home',
                    selected: false
                },
                {
                    id: 5,
                    imgSrc: converse,
                    title: 'Converse CA',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    description: 'Description: Backend code migration to Storefront Reference Architecture structure.',
                    link: 'https://converse.ca/',
                    selected: false
                },
                {
                    id: 6,
                    imgSrc: montblanc,
                    title: 'Montblanc AE',
                    role1: 'Role: B2C Salesforce Developer',
                    environment: 'Environment: Salesforce SFRA',
                    description: 'Description: Implementation of a Store Locator that uses a geolocation value to match nearest store to customer position, map personalized with CSS Styles, modal/templates translations from English to Arab and event tracking fix using Google Tag Manager.',
                    link: 'https://www.montblanc.com/en-ae',
                    selected: false
                },
                {
                    id: 7,
                    imgSrc: hybrick,
                    title: 'Hybrick',
                    role1: 'Role: Cloud Developer JR',
                    role2: 'Role: Blockchain Developer JR',
                    environment: 'Environment: Amazon Web Services',
                    description: 'Description: Creation of a exclusive crypto currency named Hybrick using Solidity, site deployment using AWS.',
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