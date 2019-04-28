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


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            correo: '',
            contra: '',
            confir: '',
            cedu: '',
            barrio: '',
            checker: true

        };
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    checkPass(text) {
        if (text === this.state.contra) {
            this.setState({checker: false})
        } else {
            this.setState({checker: true})
        }
        console.log(text);
    }

    render() {

        return (
            <div className="login_register_container">
                <Card  id="register_card">
                    <CardContent>
                        <form>
                            <h2>Register</h2>
                            <TextField
                                id="name"
                                label="Nombre"
                                style={{margin: 5}}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="correo"
                                label="Email"
                                style={{margin: 5}}
                                value={this.state.correo}
                                onChange={this.handleChange('correo')}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="password"
                                type='password'
                                label="Contraseña"
                                style={{margin: 5}}
                                value={this.state.contra}
                                onChange={this.handleChange('contra')}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="passconf"
                                type='password'
                                label="Confirmar contraseña"
                                style={{margin: 5}}
                                //value={this.state.confir}
                                onChange={(text) => (this.checkPass(text.target.value))}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="cedula"
                                label="Cedula de Ciudadanía"
                                style={{margin: 5}}
                                value={this.state.cedu}
                                onChange={this.handleChange('cedu')}
                                margin="normal"
                            />
                            <br/>
                            <FormControl >
                                <InputLabel htmlFor="barrio-select">Barrio</InputLabel>
                                <Select
                                    value={this.state.barrio}
                                    onChange={this.handleChange('barrio')}
                                    inputProps={{
                                        name: 'barrio',
                                        id: 'barrio-select',
                                    }}
                                >
                                    <MenuItem value={"Villa Mojon"}>Villa Mojón</MenuItem>
                                    <MenuItem value={"El Chuchal"}>El Chuchal</MenuItem>
                                    <MenuItem value={"Brincaypea"}>Brincaypea</MenuItem>
                                    <MenuItem value={"Salsipuedes"}>Salsipuedes</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </CardContent>
                    <CardActions className="card_button_container">

                        <Button variant="contained" color="primary" style={{padding: 10}} onClick={cons.register(false,this.state.cedu, this.state.name, this.state.correo, this.state.contra, this.state.barrio)} disabled={this.state.checker}>

                            <Typography variant="button">
                                Register
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>

            </div>
        );
    }


}

export default Register;
