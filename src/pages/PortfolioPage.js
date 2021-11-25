import React from 'react';
import Hero from '../components/Hero';
import CarouselPortfolio from '../components/CarouselPortfolio';
import {Helmet} from "react-helmet";

function PortfolioPage(props) {

    return(
        <div class="mb-4">
            <Helmet>
                <title>Daniel Vega || Portfolio</title>
            </Helmet>
            <Hero title={props.title} />
            <CarouselPortfolio />
        </div>
    );

}

export default PortfolioPage;