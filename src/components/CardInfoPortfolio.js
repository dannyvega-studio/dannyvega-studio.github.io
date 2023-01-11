import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfoPortfolio(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info-portfolio" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <p className="g-card-sub-title">{props.role1}</p>
            <p className="g-card-sub-title">{props.role2}</p>
            <p className="g-card-sub-title">{props.environment}</p>
            <p className="g-card-sub-title">{props.environment2}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" class="g-card-link">View Website</a>
        </animated.div>
    );

}

export default CardInfoPortfolio;