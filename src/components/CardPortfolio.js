import React from 'react';
import CardInfoPortfolio from '../components/CardInfoPortfolio';


function CardPortfolio(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>

            <img className="g-card-image-portfolio mb-4" src={props.item.imgSrc} alt={props.item.imgSrc} />
            
            { props.item.selected && 
                <CardInfoPortfolio title={props.item.title} 
                                role1={props.item.role1} 
                                role2={props.item.role2}
                                environment={props.item.environment} 
                                environment2={props.item.environment2} 
                                body={props.item.body} 
                                link={props.item.link} /> 
            }
        </div>
    );
}

export default CardPortfolio;