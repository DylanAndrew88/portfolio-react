
  import React, { Component } from 'react';
  import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

  class Contact extends Component {
    render() {
      return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2 className="grid-name">About Me</h2>
              <div className="avatar-bkgrd">
                <img src="https://render.bitstrips.com/v2/cpanel/2196307c-2ceb-46f8-8bf4-4c3e3f34f93e-c7645b9e-b7a7-4056-8eb3-519f202fab64-v1.png?transparent=1&palette=1"
                alt="avatar" className="avatar-img"/>
              </div>
              <p className="about-me" style={{marginTop:'1.2em'}}>I have a number passions and interests, whether it be film,
                music, politics or programming. I am a multi-instrumentalist/singer as well
                as an aspiring writer. My favorite band is Radiohead and my favorite film is
                "2001: A Space Odyssey". I am seeking employment as a Front-End Web Developer.</p>
            </Cell>
            <Cell col={6} style={{margin:'auto'}}>
              <h2 className="contact-info">Contact Info</h2>
              <hr/>
              <div className="contact-list">
                <List>
                  <ListItem>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <ListItemContent style={{color:'black', fontSize:'27.5px', fontFamily:'Play'}}>(908)-251-2809</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <ListItemContent style={{color:'black', fontSize:'27.5px', fontFamily:'Play'}}>dylanstump88@gmail.com</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <i className="fa fa-address-card" aria-hidden="true"/>
                    <ListItemContent style={{color:'black', fontSize:'27.5px', fontFamily:'Play'}}>Edison, NJ</ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }

  export default Contact;
