import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class App extends React.Component {

  render(){

  return (
    <div className="App">
      <nav position= "static">

          <Toolbar>
            <Button  color="inherit">Login</Button>
            <Button  color="inherit">Register</Button>
          </Toolbar>

      </nav>
      <main>
        <h1>Contenido</h1>


      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
}

export default App;
