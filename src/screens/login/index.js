import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from "@material-ui/core/es/Typography/Typography";
import 'typeface-roboto';

import * as cons from '../../res/values/constants';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            correo: '',
            contra: ''

        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };


    render() {

        return (
            <div className="login_register_container">

              <Card id="login_card">
                  <CardContent>
                  <form className ="frm_login">
                <h2>Login</h2>
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
                        id="foodcat"
                        type='password'
                        label="Contraseña"
                        style={{margin: 5}}
                        value={this.state.contra}
                        onChange={this.handleChange('contra')}
                        margin="normal"
                    />
                    <br/>
                    <br/>

                    <Button variant="contained"   style={{padding: 10}} color="primary" onClick={cons.login(this.state.correo, this.state.contra)}>

                        <Typography variant="button">
                            Login
                        </Typography>
                    </Button>
                      </form>
                    </CardContent>
                    </Card>


                </div>

        );
    }


}

export default Login;
