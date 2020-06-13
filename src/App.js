import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css';

export default function App() {

  const fetchGet = () => {}
  
  return (
    <div className="App">
      <Switch>
        <Route path='/login' render={(routerProps) => <Login {...routerProps}/> } />
        <Route  exact path='/' render={(routerProps) => <Dashboard {...routerProps}/> } />
      </Switch>
    </div>
  );
}
