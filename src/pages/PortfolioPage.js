import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import {Helmet} from "react-helmet";

function PortfolioPage(props) {

    return(
        <div class="mb-4">
            <Helmet>
                <title>Danny Vega || Portfolio</title>
            </Helmet>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    );

}

export default PortfolioPage;