import React from 'react';
import './App.css';
//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
//Componentes//
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
//Paginacion//
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import CertificatePage from './pages/CertificatePage';
import PortfolioPage from './pages/PortfolioPage';
//Assets//
import logo from './assets/images/logo.png'

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: 'Danny Vega Portfolio',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Skill', path: '/skill' },
        { title: 'Certificate', path: '/certificate' }
      ],
      home: {
        title: 'Danny Vega',
        subTitle: 'Frontend JR Developer',
        text: 'Think, Develop and Enjoy!'
      },
      about: {
        title: 'About Me',
        subTitle: 'Just me being myself',
      },
      portfolio: {
        title: 'Be Creative',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my portfolio projects below'
      },
      skill: {
        title: 'My Skills',
        subTitle: 'Always learning something new',
        text: 'Checkout my enviroments and programming lenguages below'
      },
      certificate: {
        title: 'I am Certify in',
        subTitle: 'Being Profesional',
        text: 'Checkout my certificates and degrees below'
      }
    }
  }

render() {
  return (
    <div className="App">

      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom navbar-light sticky-top" expand="lg">
            <Navbar.Brand><img src={logo} width="75px" /></Navbar.Brand>
            <Navbar.Brand>Danny Vega</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/skill">Skill</Link>
                <Link className="nav-link" to="/certificate">Certification</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} />} />
          <Route path="/skill" render={() => <SkillPage title={this.state.skill.title} subTitle={this.state.skill.subTitle} text={this.state.skill.text} />} />
          <Route path="/certificate" render={() => <CertificatePage title={this.state.certificate.title} subTitle={this.state.certificate.subTitle} text={this.state.certificate.text} />} />
          
          <WhatsApp />
          <Footer />
          
        </Container>
      </Router>
    
      </div>
    );
  }
}

export default App;
