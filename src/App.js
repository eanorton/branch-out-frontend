import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SuccessContainer from './containers/SuccessContainer';
import { Button } from 'semantic-ui-react';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (

      <div className="App">
        <Router>
          <Route component={()=><NavBar {...this.props} />} />
        </Router>

        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">BRANCH OUT WIP</h1>
        </header>

        <Router>
          <Route path="/success" component={()=><SuccessContainer {...this.props} />} />
        </Router>

      </div>

    );
  }
}

export default App;

{/*         <Router>
          <Route exact path="/" render={ ()=>(<form><Button style={{borderRadius: "20px"}} positive type="submit" formAction="http://localhost:4000/api/v1/login">LOGIN WITH SPOTIFY</Button></form>)} />
        </Router> */}
