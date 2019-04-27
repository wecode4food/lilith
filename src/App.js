import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as cons from './res/values/constants'; // Archivo .js con las constantes

class App extends React.Component{

  lastResult = {};

  ServerTest(){
    cons.webSocket.emit('read',
    {
      child: 'usuarios',
    });
  }

  serverStart(){
    cons.webSocket.on('connection',function(s){
      s.on('result',(resultado) => {
        this.lastResult = resultado;
      });
    });
  }

  //leer de la BD
  getFromDb(in_child){
    cons.webSocket.emit('read',
    {
      child: in_child
    });
    return this.lastResult;
  }

  //escribir en la BD
  upToDb(up_child, up_data)
  {
    cons.webSocket.emit('write',
    {
      child: up_child,
      data: up_data
    });
  }

  render(){
    this.serverStart(); // inicia las escuchas
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>

        <Button variant="contained" onClick={() => (this.ServerTest())}>
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
