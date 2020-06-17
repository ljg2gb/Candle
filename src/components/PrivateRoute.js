import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard.js';

export default function PrivateRoute(props) {
    return( 
        localStorage.token ? 
        <Route {...props} render={(routerProps) => (
            <Dashboard setFriends={props.setFriends} myFriends={props.myFriends} />
        )} /> : 
        <Redirect to="/login" /> 
    )
}
