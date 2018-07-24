import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SuccessContainer from './containers/SuccessContainer';

class App extends Component {

  render() {
    return (

      <div className="App">

        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">BRANCH OUT WIP</h1>
        </header>

        <Router>
          <Route exact path="/" render={ ()=>(<form><button type="submit" formAction="http://localhost:4000/api/v1/login">CLICK TO LOGIN WITH SPOTIFY</button></form>)} />
        </Router>

        <Router>
          <Route path="/success" component={()=><SuccessContainer {...this.props} />} />
        </Router>

      </div>

    );
  }
}

export default App;
