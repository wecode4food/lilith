import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Login from './screens/login';
import Register from './screens/register';
import Home from './screens/home';
import Post from './screens/post';
import AdminLayout from './Admin_layout';
import AdminRetos from './screens/admin_retos';
import Graficos from './screens/graficos';
import TestPage from './screens/testpage';
import Vote from './screens/vote'
import Reto from './screens/retos';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import 'typeface-roboto';

class App extends React.Component{

  render(){

  return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route exact path="/" render={props => <Home {...props}/>}/>
                  <Route path="/login" render={props => <Login {...props}/>}/>
                  <Route path="/register" render={props => <Register {...props}/>}/>

                  {/*<Route path="/post" render={props => <Post {...props}/>}/>*/}
                  <Route path="/vote" render={props => <Vote {...props}/>}/>
                  <Route path="/testpage" render={props => <TestPage {...props}/>}/>
                  <Route path="/AdminLayout" render={props => <AdminLayout {...props}/>}/>
                  <Route path="/AdminRetos" render={props => <AdminRetos {...props}/>}/>
                  <Route path="/Graficos" render={props => <Graficos {...props}/>}/>

                  <Route path="/reto/:id" component={Reto}/>
                  <Route path="/post/:id" component={Post}/>

              </Switch>
          </Layout>
      </BrowserRouter>
  );
}
}

export default App;
