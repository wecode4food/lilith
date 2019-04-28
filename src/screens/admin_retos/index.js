import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from "@material-ui/core/es/Typography/Typography";
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import * as cons from '../../res/values/constants';

class Admretos extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          name: '',
          des: '',
          srcimg: '',
          date_start:'',
          date_end: ''

        };
    }

    handleChange = name => event => {
      console.log(event.target.value);
        this.setState({ [name]: event.target.value });
    };


    render() {

        return (
            <div id="cont_crear_retos">
            <Card  id="register_card">
                <CardContent>
                    <form>
                        <h2>Formulario de Reto</h2>
                        <TextField
                            id="name"
                            label="Nombre del reto"
                            style={{margin: 5}}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="des"
                            label="Descripción"
                            multiline
                            style={{margin: 5}}
                            value={this.state.des}
                            onChange={this.handleChange('des')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="date-start"
                            type='date'
                            label="Fecha de Comienzo"
                            style={{margin: 5}}
                            value={this.state.date_start}
                            onChange={this.handleChange('date_start')}
                            margin="normal"
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />
                        <br/>
                        <TextField
                          id="date-end"
                          label="Fecha de termino"
                          type="date"
                            defaultValue="2017-05-24"

                            value={this.state.date_end}
                            onChange={this.handleChange('date_end')}
                            margin="normal"

                          InputLabelProps={{
                            shrink: true,
                          }}
                          />

                    </form>
                </CardContent>
                <CardActions className="card_button_container">

                    <Button variant="contained" color="primary" style={{padding: 10}} onClick={cons.register(false,this.state.cedu, this.state.name, this.state.correo, this.state.contra, this.state.barrio)}>

                        <Typography variant="button">
                            Crear Reto
                        </Typography>
                    </Button>
                </CardActions>
            </Card>

              </div>

        );
    }


}

export default Admretos;
