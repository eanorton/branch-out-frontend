import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SuccessContainer from './containers/SuccessContainer';
import NavBar from './components/NavBar';
import { Header } from 'semantic-ui-react';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 650
      }
    },
    color: {
      value: "#21ba45"
    },
    shape: {
      stroke:{
        width: 0,
        color: "#000000"
      },
      polygon:{
        nb_sides:5
      },
    },
    opacity: {
      value: 0.09,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8,
      random: false,
      straight: false,
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity:{
    detect_on: "canvas",
    "events": {
      "onhover": {
        "enable":true,
        "mode":"grab"
      },
      onclick: {
        enable:true,
        mode: "push"
      },
      "resize":true
    },
    "modes": {
      "grab": {
        "distance":292,
        "line_linked": {
          "opacity":1
        }
      }
    }
  },
  "retina_detect":true
}

class App extends Component {

  render() {

    return (
      <React.Fragment>

        <Particles params={particleOptions} style={{position: 'absolute'}} height="60%">
        </Particles>

        <div className="App">
          <Router>
            <Route component={()=><NavBar {...this.props} />} />
          </Router>

          <Header style={{paddingTop: "100px", letterSpacing: "4px"}}>
            <h1 className="main-title" style={{fontFamily: 'Raleway, sans-serif', fontSize: "70px"}}>BRANCH <span className="thin" style={{fontFamily: 'Raleway'}}>OUT</span></h1>
          </Header>

          <Router>
            <Route exact path="/" render={ ()=>(<h3 style={{color: "white", fontWeight:"400", letterSpacing: "4px", fontFamily: 'Raleway, sans-serif'}}>SIGN IN WITH SPOTIFY TO SEARCH BY ARTIST FOR RECOMMENDATIONS</h3>) } />
          </Router>

          <Router>
            <Route path="/success" component={()=><SuccessContainer {...this.props} />} />
          </Router>

      </div>
    </React.Fragment>
    );
  }
}

export default App;
