import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import ContentSkillsFrontend from '../components/ContentSkillsFrontend';
import ContentSkillsDB from '../components/ContentSkillsDB';
import ContentSkillsCloud from '../components/ContentSkillsCloud';
import {Helmet} from "react-helmet";

function AboutPage(props) {

    return(
        <div>
            <Helmet>
                <title>Danny Vega || About Me</title>
            </Helmet>

            <Hero title={props.title} subTitle={props.subTitle}/>

            <Content>
                <p>Hello, my name is Danny. I'm a frontend jr developer with experience in Express JS, Node JS, MongoDB, React and more.</p>

                <p>Actually I'm looking for improve my UI and UX skills to became a frontend sr developer and after that a fullstack developer (currently working on some ideas and courses).</p>

                <p>The latest project I participate in, Hybrick, is a site for purchase and sale of real state using Blockchain. In this project I had Cloud Manager and Frontend Developer roles. You can check it out <a href="https://hybrick.cloudmex.io/" target="_blank">here</a>.</p>

                <p>When I'm not learning something new, I'm spending time on my hobbies like videogames, trading card games, movies, anime and more. </p>
            </Content>
        </div>
    );
}

export default AboutPage;