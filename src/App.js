import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './app.scss';

const loginURL = "http://localhost:3000/login"
const profileURL = "http://localhost:3000/profile"

export default class App extends Component {

  state = {
    friends: [],
    isLoggedIn: false
  }

  setFriends = (friends) => {
    this.setState({ friends })
  }

  setIsLoggedIn = () => {
    return localStorage.token ? this.setState({isLoggedIn: true}) : this.setState({isLoggedIn: false})
  }


  componentDidMount = () => {
    this.setIsLoggedIn()
    if(localStorage.token){
      fetch(profileURL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
        .then(response => response.json())
        .then(console.log)
      })
    }
  }
  
  render() {
    console.log(this.state.isLoggedIn)
    return (
      <div className="App">
      <Login setIsLoggedIn={this.setIsLoggedIn} setFriends={this.setFriends} />
      <Dashboard  setFriends={this.setFriends} myFriends={this.state.friends} />
        {/* <Switch>
          <Route path='/login' render={(routerProps) => <Login setFriends={this.setFriends} {...routerProps}/> } />
          <Route  exact path='/' render={(routerProps) => <Dashboard myFriends={this.state.friends} {...routerProps}/> } />
        </Switch> */}
      </div>
    );
  }
}
