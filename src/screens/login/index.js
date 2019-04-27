import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from "@material-ui/core/es/Typography/Typography";


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
            <div>
                <form>
                    <TextField
                        id="correo"
                        label="Email"
                        style={{margin: 5}}
                        value={this.state.correo}
                        onChange={this.handleChange('correo')}
                        margin="normal"
                    />
                    <TextField
                        id="foodcat"
                        type='password'
                        label="Contraseña"
                        style={{margin: 5}}
                        value={this.state.contra}
                        onChange={this.handleChange('contra')}
                        margin="normal"
                    />
                    <Button>
                        <Typography>
                            Login
                        </Typography>
                    </Button>
                </form>

            </div>
        );
    }


}

export default Login;