import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './app.scss';

const loginURL = "http://localhost:3000/login"
const profileURL = "http://localhost:3000/profile"

class App extends Component {

  state = {
    friends: [],
    user: {},
    user_id: '',
    user_name: '',
    user_email: '',
    alert: ''
  }

  setFriends = (friends) => {
    this.setState({
      friends: [...this.state.friends, friends]
    })
  }

  validateUser = () => {
    const token = localStorage.token
    if(token) {
      fetch(profileURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => {
        this.setState({
          user: response,
          friends: response.friends
        })
      })
    }
  }

  componentDidMount = () => {
    this.validateUser()
  }

  login = (user) => {
    fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
      if(response.message){
        this.setState({alert: response.message})
      } else {
        localStorage.setItem('token', response.token)
        this.setState({
          friends: response.friends,
          user_id: response.user_id,
          user_name: response.user_name,
          user_email: response.user_email
        })
      }
    })
    .then(() => this.props.history.push('/'))
  }
    
  render() {
    return (
      <div className="App">
        <PrivateRoute
          exact
          path='/'
          setFriends={this.setFriends}
          myFriends={this.state.friends}
        />
        <Route path='/login' render={(routerProps) => <Login {...routerProps} login={this.login} setFriends={this.setFriends}/> } />
        {/* <Login setIsLoggedIn={this.setIsLoggedIn} setFriends={this.setFriends} /> */}
        {/* <Dashboard  setFriends={this.setFriends} myFriends={this.state.friends} /> */}
      </div>
    );
  }

}

export default withRouter(App);
