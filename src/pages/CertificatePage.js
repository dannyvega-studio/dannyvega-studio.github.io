import React from 'react';
import Hero from '../components/Hero';
import ContentSchool from '../components/ContentSchool';
import ContentSalesforce from '../components/ContentSalesforce';
import ContentScrum from '../components/ContentScrum';
import ContentAgile from '../components/ContentAgile';
import {Helmet} from "react-helmet";

function CertificatePage(props) {

    return(
        <div>
            <Helmet>
                <title>Daniel Vega || My Certificates and Degrees</title>
            </Helmet>

            <Hero title={props.title} className="mb-4"/>
            
            <ContentSalesforce/>
            <ContentScrum/>
            <ContentAgile />
            <ContentSchool />
        </div>
    );
}

export default CertificatePage;