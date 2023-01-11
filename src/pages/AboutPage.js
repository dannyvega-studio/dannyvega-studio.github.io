import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Zoom from 'react-reveal/Zoom';
import {Helmet} from "react-helmet";

function AboutPage(props) {

    return(
        <div>
            <Helmet>
                <title>Daniel Vega || About Me</title>
            </Helmet>

            <Hero title={props.title} subTitle={props.subTitle}/>

            <Content>
                <Zoom>
                    <p>Hello there! My name is Daniel Vega I'm a graduate software engineer from the <a href="https://www.utnay.edu.mx/" target="_blank" rel="noreferrer" class="about-link">Universidad Tecnologica de Nayarit</a> and I am currently a certified <a href="https://trailhead.salesforce.com/en/credentials/verification/" target="_blank" rel="noreferrer" class="about-link">B2C Salesforce Commerce Cloud Developer</a>, I have participated in various projects mainly on the backend side but also involved to a lesser extent on the frontend side.</p>
                </Zoom>
                <Zoom>
                    <p>My professional experience brought me to the world of salesforces where I have carried out various tasks from service implementations, integrations of various types (such as payment methods, geolocation, etc.), template modification, locales modification, bug fixes, refactoring of existing code, improve site speed performance, import and export of assets and metadata, the creation of site preferences, custom preferences, code management in SFRA structure, as well as creation of <a href="https://developer.salesforce.com/docs/component-library/documentation/en/lwc" target="_blank" rel="noreferrer" class="about-link">Lightning Web Components</a>, creation of permissions like a <a href="https://www.salesforce.com/blog/what-is-a-salesforce-admin/" target="_blank" rel="noreferrer" class="about-link">Salesforce Administrator</a>, etc, etc.</p>
                </Zoom>
                <Zoom>
                    <p>Actualy I'm still learning day by day new ways to improve the way I code, learning from other members of the development team, I mean there is always something new to learn from other persons.</p>
                </Zoom>
                <Zoom>
                    <p>Now speaking a bit offtopic because not everything in life is work, I am a big fan of Trading Card Games like Yugioh and Pokemon mainly (but I have played many more), I love movies, rock music, travel to meet new places and the most importantly a person who loves to spend time with his family.</p>
                </Zoom>
            </Content>
        </div>
    );
}

export default AboutPage;