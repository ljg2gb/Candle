import React, { Component } from 'react';
import Authenticate from './Authenticate';
// import { render } from 'node-sass';

export default class Login extends Component {

  componentDidMount(){
    localStorage.removeItem('token')
  }
  render() {
    return (
      <div className='login'>
          <Authenticate login={this.props.login} setFriends={this.props.setFriends} />
      </div>
    );
  }
} 