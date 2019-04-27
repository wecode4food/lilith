import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as cons from './res/values/constants'; // Archivo .js con las constantes

class App extends React.Component{

  ServerTest(){
    cons.webSocket.emit("new");
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>

        <Button variant="contained" onPress={() => (this.ServerTest())}>
          <Typography>
            Test
          </Typography>
        </Button>
      </header>
    </div>
  );
}
}


export default App;
