import React from 'react';
import CardInfoPortfolio from '../components/CardInfoPortfolio';


function CardPortfolio(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image-portfolio mb-4" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfoPortfolio title={props.item.title} subTitle={props.item.subTitle} role={props.item.role} environment={props.item.environment} link={props.item.link} /> }
        </div>
    );
}

export default CardPortfolio;