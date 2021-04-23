import React from 'react';
import Card from './CardPortfolio';
import hybrick from '../assets/images/portfolio/hybrick.png';
import novels from '../assets/images/portfolio/lightnovel.png';
import kuervo from '../assets/images/portfolio/kuervostore.png';
import { Container, Row } from 'react-bootstrap';

class CarouselPortfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Hybrick',
                    subTitle: 'Real State Trade by Cryptocurrency',
                    imgSrc: hybrick,
                    link: 'https://hybrick.cloudmex.io/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Light Novels',
                    subTitle: '¡Sharing my hobby!',
                    imgSrc: novels,
                    link: 'https://dannyvega-studio.github.io/light-novel/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Kuervo Store',
                    subTitle: 'From Japan to the World!',
                    imgSrc: kuervo,
                    link: 'https://dannyvega-studio.github.io/kuervostore/',
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