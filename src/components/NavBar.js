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
        <Menu inverted>
          <Menu.Item
            name={this.state.currentUser}
            active={activeItem === this.state.currentUser}
            onClick={this.handleItemClick}
            color="green"
            position="right"
            />
          <Menu.Item
            name='Sign Out'
            active={activeItem === 'Sign Out'}
            onClick={this.handleItemClick}
            href={`http://localhost:4000/api/v1/${this.state.currentUser}/logout`}
            color="green"
            />
        </Menu> :
        <Menu inverted>
          <Menu.Item
            name="Sign In"
            active={activeItem === "Sign In"}
            onClick={this.handleItemClick}
            color="green"
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
