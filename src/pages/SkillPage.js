import React from 'react';
import Hero from '../components/Hero';
import ContentSkillsFrontend from '../components/ContentSkillsFrontend';
import ContentSkillsBackend from '../components/ContentSkillsBackend';
import ContentSkillsDB from '../components/ContentSkillsDB';
import ContentSkillsCloud from '../components/ContentSkillsCloud';
import {Helmet} from "react-helmet";

function SkillPage(props) {

    return(
        <div>
            <Helmet>
                <title>Daniel Vega || My Skills</title>
            </Helmet>

            <Hero title={props.title} className="mb-4" />
                
            <ContentSkillsFrontend />
            <ContentSkillsBackend />
            <ContentSkillsCloud />
            <ContentSkillsDB />
        </div>
    );
}

export default SkillPage;