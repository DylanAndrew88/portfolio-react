
  import React, { Component } from 'react';
  import './App.css';
  import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
  import Main from './components/main';
  import { Link } from 'react-router-dom';

  class App extends Component {
    render() {
      return (
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Dylan Stump - Portfolio" scroll>
              <Navigation>
                <Link style={{fontSize:'1.7em', fontFamily:'Questrial'}} to="/main">Home</Link>
                <Link style={{fontSize:'1.7em', fontFamily:'Questrial'}} to="/resume">Resume</Link>
                <Link style={{fontSize:'1.7em', fontFamily:'Questrial'}} to="/projects">Projects</Link>
                <Link style={{fontSize:'1.7em', fontFamily:'Questrial'}} to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Portfolio">
              <Navigation>
              <Link style={{fontSize:'1.5em', fontFamily:'Jura', color:'black'}} to="/main">// Home</Link>
              <Link style={{fontSize:'1.5em', fontFamily:'Jura', color:'black'}} to="/resume">// Resume</Link>
              <Link style={{fontSize:'1.5em', fontFamily:'Jura', color:'black'}} to="/projects">// Projects</Link>
              <Link style={{fontSize:'1.5em', fontFamily:'Jura', color:'black'}} to="/contact">// Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content"/>
              <Main/>
            </Content>
          </Layout>
        </div>
      );
    }
  }

  export default App;
