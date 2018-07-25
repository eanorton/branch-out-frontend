import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SuccessContainer from './containers/SuccessContainer';
import NavBar from './components/NavBar';
import { Header } from 'semantic-ui-react';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 28,
      density: {
        enable: true,
        value_area: 631}
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
        value: 0.09469771699587272,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
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
        speed: 6,
        random: false,
        straight: false,
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity:{
      "detect_on":"window",
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
        <Particles params={particleOptions} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        </Particles>
        
        <div className="App">
          <Router>
            <Route component={()=><NavBar {...this.props} />} />
          </Router>

          <Header>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="main-title">BRANCH <span className="thin">OUT</span></h1>
          </Header>

          <Router>
            <Route exact path="/" render={ ()=>(<h3 style={{color: "white", fontWeight:"200"}}>SIGN IN WITH SPOTIFY TO BEGIN SEARCHING BY ARTISTS TO FIND RECOMMENDATIONS</h3>) } />
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

{/*         <Router>
          <Route exact path="/" render={ ()=>(<form><Button style={{borderRadius: "20px"}} positive type="submit" formAction="http://localhost:4000/api/v1/login">LOGIN WITH SPOTIFY</Button></form>)} />
        </Router> */}
