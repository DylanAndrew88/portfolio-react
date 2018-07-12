
  import React, { Component } from 'react';
  import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

  class Projects extends Component {
    constructor(props) {
      super(props);
      this.state = { activeTab: 0 };
    }
    toggleCategories() {
      if (this.state.activeTab === 0){
        return(
          <Card shadow={10} style={{width:'1050px', height:'650px', margin:'auto', marginBottom:'24px', border:'2px solid black'}}>
            <CardTitle style={{height:'400px', background:'url(https://dylanandrew88.github.io/portfolio/jukeboxhero.png) no-repeat', backgroundSize:'1050px 590px', color:'black'}}></CardTitle>
            <div className="section-2" style={{marginTop: '40px'}}>
              <CardText style={{fontSize:'3.2em', color:'black', height:'21px', fontFamily:'Saira', marginLeft:'10px'}}>Jukebox (SoundCloud API)</CardText>
              <CardText style={{marginLeft:'15px', marginTop:'5px', fontSize:'1.12em', width:'475px', fontFamily:'Play'}}>JukeBox is a music steaming
                app powered by the SoundCloud API and built using vanilla JavaScript.</CardText>
              <CardActions border="">
                <a href="https://github.com/DylanAndrew88/soundcloud-api" target="_blank"><Button style={{marginLeft:'10px', fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Github</Button></a>
                <a href="https://dylanandrew88.github.io/soundcloud-api/" target="_blank"><Button style={{fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Site</Button></a>
              </CardActions>
            </div>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        )
      } else if (this.state.activeTab === 1) {
        return(
          <Card shadow={10} style={{width:'1050px', height:'650px', margin:'auto', marginBottom:'24px', border:'2px solid black'}}>
            <CardTitle style={{height:'400px', background:'url(https://dylanandrew88.github.io/portfolio/mcuapp.png) no-repeat', backgroundSize:'1050px 850px', color:'black'}}></CardTitle>
            <div className="section-2" style={{marginTop: '40px'}}>
              <CardText style={{fontSize:'3.2em', color:'black', height:'21px', fontFamily:'Saira', marginLeft:'10px'}}>MCU App</CardText>
              <CardText style={{marginLeft:'15px', marginTop:'5px', fontSize:'1.12em', width:'475px', fontFamily:'Play'}}>MCU-App is a Marvel movie app built using JSON data
               with dynamic routing using NodeJS and Handlebars.</CardText>
              <CardActions border="">
                <a href="https://github.com/DylanAndrew88/mcu-app" target="_blank"><Button style={{marginLeft:'10px', fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Github</Button></a>
                <a href="https://mcu-app.herokuapp.com/movies" target="_blank"><Button style={{fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Site</Button></a>
              </CardActions>
            </div>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        )
      } else if (this.state.activeTab === 2) {
        return(
          <Card shadow={10} style={{width:'1050px', height:'650px', margin:'auto', marginBottom:'24px', border:'2px solid black'}}>
            <CardTitle style={{height:'400px', background:'url(https://dylanandrew88.github.io/portfolio/fandomonium.png) no-repeat', backgroundSize:'1060px 740px', color:'white'}}></CardTitle>
            <div className="section-2" style={{marginTop:'40px'}}>
              <CardText style={{fontSize:'3.2em', color:'black', height:'21px', fontFamily:'Saira', marginLeft:'10px'}}>Fandomonium FanArt</CardText>
              <CardText style={{marginLeft:'15px', marginTop:'5px', fontSize:'1.12em', width:'475px', fontFamily:'Play'}}>Fandomonium is a shopping site built using ReactJS
                and a RESTful API using MongoDB.</CardText>
              <CardActions border="">
                <a href="https://github.com/DylanAndrew88/Fandomonium" target="_blank"><Button style={{marginLeft:'10px', fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Github</Button></a>
                <a href="https://fandomonium.herokuapp.com/" target="_blank"><Button style={{fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Site</Button></a>
              </CardActions>
            </div>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        )
      } else if (this.state.activeTab === 3) {
        return(
          <Card shadow={10} style={{width:'1050px', height:'650px', margin:'auto', marginBottom:'24px', border:'2px solid black'}}>
            <CardTitle style={{height:'400px', background:'url(https://dylanandrew88.github.io/portfolio/Mystery-word.png) no-repeat', backgroundSize:'1050px 560px', color:'black'}}></CardTitle>
            <div className="section-2" style={{marginTop: '40px'}}>
              <CardText style={{fontSize:'3.2em', color:'black', height:'21px', fontFamily:'Saira', marginLeft:'10px'}}>MysteryWord</CardText>
              <CardText style={{marginLeft:'15px', marginTop:'5px', fontSize:'1.12em', width:'475px', fontFamily:'Play'}}>Mystery Word is a hangman style word guessing game
                built using NodeJS.</CardText>
              <CardActions border="">
                <a href="https://github.com/DylanAndrew88/week-5-project" target="_blank"><Button style={{marginLeft:'10px', fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Github</Button></a>
                <a href="https://pacific-gorge-73864.herokuapp.com/" target="_blank"><Button style={{fontSize:'1.4em', fontFamily:'Questrial', color:'#720EC0'}} colored>Site</Button></a>
              </CardActions>
            </div>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        )
      }
    }
    render() {
      return(
        <div className="category-tabs">
          <Tabs style={{backgroundColor:'#C7C7C7'}} activeTab={this.state.activeTab} onChange={(tabId) => this. setState({ activeTab: tabId })} ripple>
            <Tab style={{color:'black', fontFamily:'Jura', letterSpacing:'.2em', fontSize:'1.3em'}}>JukeBox - SoundCloud API</Tab>
            <Tab style={{color:'black', fontFamily:'Jura', letterSpacing:'.2em', fontSize:'1.3em'}}>MCU-App</Tab>
            <Tab style={{color:'black', fontFamily:'Jura', letterSpacing:'.2em', fontSize:'1.3em'}}>Fandomonium FanArt</Tab>
            <Tab style={{color:'black', fontFamily:'Jura', letterSpacing:'.2em', fontSize:'1.3em'}}>MysteryWord</Tab>
          </Tabs>
            <Grid className="projects-grid" style={{width:'100vw', justifyContent:'center', paddingLeft:'0%'}}>
              <cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </cell>
            </Grid>
        </div>
      )
    }
  }

  export default Projects;
