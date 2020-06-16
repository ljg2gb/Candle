import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css';

// const url = 'http://localhost:3000/'
// const usersURL = url + 'users/'
// const friendsURL = url + 'friends/'

export default class App extends Component {

  state = {
    friends: []
  }

  // function fetchGet() {
  //   fetch('http://localhost:3000/users/7')
  //     .then(response => response.json())
  //     .then(console.log)
  //     // .then(this.setState({
  //     //   friends:
  //     // }))
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/users/1')
  //   .then(response => response.json())
  //   .then(result => {
  //     this.setState({
  //       friends: result.friends
  //     })
  //   })
  // }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' render={(routerProps) => <Login {...routerProps}/> } />
          <Route  exact path='/' render={(routerProps) => <Dashboard myFriends={this.state.friends} {...routerProps}/> } />
        </Switch>
      </div>
    );
  }
}
