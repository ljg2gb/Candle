import React, { Component } from 'react';
import Authenticate from './Authenticate';
import Welcome from './Welcome';
// import { render } from 'node-sass';

export default class Login extends Component {

  componentDidMount(){
    localStorage.removeItem('token')
  }
  render() {
    return (
      <div className='login'>
          <Welcome />
          <Authenticate login={this.props.login} alertMessage={this.props.alertMessage} setFriends={this.props.setFriends} />
      </div>
    );
  }
} 