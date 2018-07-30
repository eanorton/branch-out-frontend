import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  state = {
    activeItem: "",
    currentUser: null
  }

  componentDidMount(){
    this.setState({currentUser: this.props.location.pathname.split("/")[2]}, ()=>this.setState({activeItem: this.state.currentUser}))
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {

    const { activeItem } = this.state

    return (
      <React.Fragment>
      {this.state.currentUser ?
        <Menu inverted style={{width: "100%", background: 'rgba(71, 71, 71, 0.25)', fontFamily: 'Raleway, sans-serif'}}>
          <Menu.Item
            style={{padding: "18px"}}
            name={this.state.currentUser}
            active={activeItem === this.state.currentUser}
            onClick={this.handleItemClick}
            position="right"
            />
          <Menu.Item
            style={{padding: "18px"}}
            name='Sign Out'
            active={activeItem === 'Sign Out'}
            onClick={this.handleItemClick}
            href={`http://localhost:4000/api/v1/${this.state.currentUser}/logout`}

            />
        </Menu>
        :
        <Menu inverted style={{background: 'rgba(71, 71, 71, 0.25)', fontFamily: 'Raleway, sans-serif'}}>
          <Menu.Item
            style={{padding: "18px"}}
            name="Sign In"
            active={activeItem === "Sign In"}
            onClick={this.handleItemClick}

            href="http://localhost:4000/api/v1/login"
            position="right"
            />
        </Menu>
      }
      </React.Fragment>
    )
  }
}

export default withRouter(NavBar);
