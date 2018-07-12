
  import React, { Component } from 'react';
  import { Grid, Cell } from 'react-mdl';

  class LandingPage extends Component {
    render() {
      return(
        <div style={{width:'100%', margin:'auto'}}>
          <Grid className="landing-grid" style={{paddingTop:'30px'}}>
            <Cell col={12}>
              <div className="avatar-bkgrd">
                <img src="https://render.bitstrips.com/v2/cpanel/2196307c-2ceb-46f8-8bf4-4c3e3f34f93e-c7645b9e-b7a7-4056-8eb3-519f202fab64-v1.png?transparent=1&palette=1"
                alt="avatar" className="avatar-img"/>
              </div>
              <div className="banner-text">
                <h1>Dylan Stump - Front End Developer</h1>
                <hr/>
                <p>HTML5 || CSS3 || JavaScript || NodeJS || ReactJS</p>
                <div className="social-links">
                  <a href="https://github.com/DylanAndrew88" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                  <a href="https://www.linkedin.com/in/dev-dylan-stump/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                  </a>
                  <a href="mailto:dylanstump88@gmail.com">
                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }

  export default LandingPage;
