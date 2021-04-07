import React from 'react';
import Hero from '../components/Hero';
import ContentSchool from '../components/ContentSchool';
import ContentScrum from '../components/ContentScrum';
import ContentAgile from '../components/ContentAgile';
import {Helmet} from "react-helmet";

function CertificatePage(props) {

    return(
        <div>
            <Helmet>
                <title>Danny Vega || My Certificates and Degrees</title>
            </Helmet>

            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
                
                <p>I'm an engineer graduated from the Universidad Tecnologica de Nayarit.</p>

                <p>And this is the professional path for which I have been certified so far, hoping to continue growing day by day.</p>
            
            <ContentSchool />
            <ContentScrum/>
            <ContentAgile />
        </div>
    );
}

export default CertificatePage;