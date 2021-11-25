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
                    <p>Hello there, has you can see my name is Daniel and I'm an software engineer graduated from the Universidad Tecnologica de Nayarit on 2021, actually it was a good challenge because the last semesters we change from pressential classes to virtual classes (because Covid and that stuff), I think this kinda help me to understand how it will be working on this industry, you know with people from all the world in real time using online platforms, also this gave me motivation to study about SCRUM to improve my knowledge.</p>
                </Zoom>
                <Zoom>
                    <p>The latest project I participate in, Montblanc website, is an ecommerce web site builded with Salesforce Commerce Cloud, you can check it if you want clicking <a href="https://www.montblanc.com/en-ae" target="_blank">HERE</a>. For this project I realized frontend and backend stuff, since simple UI issues until create events and some features.</p>
                </Zoom>
                <Zoom>
                    <p>Actualy I'm still learning day by day new ways to improve the way I code, learning from other members of the development team and also from the Tech Leads, I mean there is always something new to learn from other persons. </p>
                </Zoom>
            </Content>
        </div>
    );
}

export default AboutPage;