import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as cons from './res/values/constants'; // Archivo .js con las constantes

import Login from './screens/login'
import Register from './screens/register'

class App extends React.Component {

    ServerTest() {
        cons.webSocket.emit("new");
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <div>Home</div>}/>
                    <Route path="/register" render={props => <Register {...props}/>}/>
                    <Route path="/login" render={props => <Login {...props}/>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;
