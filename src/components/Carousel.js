import React from 'react';
import Card from '../components/Card';
import hybrick from '../assets/images/hybrick.png';
import garrafas from '../assets/images/3garrafas.png';
import kuervo from '../assets/images/kuervostore.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

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
                    title: 'Neveria 3 Garrafas',
                    subTitle: '¡Saborea tus momentos!',
                    imgSrc: garrafas,
                    link: 'https://instagram.com/neveria3garrafas/',
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

export default Carousel;