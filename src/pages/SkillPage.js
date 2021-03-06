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
                <title>Danny Vega || My Skills</title>
            </Helmet>

            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
                
                <p>This are some of my develop skill that I already used in some projects.</p>

                <p>But always I'm studying and trying new thing so this list will be growing.</p>
            
            <ContentSkillsFrontend />
            <ContentSkillsBackend />
            <ContentSkillsDB />
            <ContentSkillsCloud />
        </div>
    );
}

export default SkillPage;