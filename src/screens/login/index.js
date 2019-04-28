import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from "@material-ui/core/es/Typography/Typography";
import 'typeface-roboto';

import * as cons from '../../res/values/constants';
import ReactNotifications from 'react-browser-notifications';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            correo: '',
            contra: ''

        };
        this.showNotifications = this.showNotifications.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    showNotifications() {
        // If the Notifications API is supported by the browser
        // then show the notification
        if (this.n.supported()) this.n.show();
    }

    handleClick(event) {
        // Do something here such as
        // console.log("Notification Clicked") OR
        // window.focus() OR
        // window.open("http://www.google.com")

        // Lastly, Close the notification
        this.n.close(event.target.tag);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    login(user, pass){
        cons.login(user, pass);
        this.showNotifications();
    }



    render() {

        cons.webSocket.on('showNotif', this.showNotifications);

        return (
            <div className="login_register_container">
                <ReactNotifications
                    onRef={ref => (this.n = ref)} // Required
                    title="Test" // Required
                    body="Login Attemped!"
                    icon="icon.png"
                    tag="abcdef"
                    onClick={event => this.handleClick(event)}
                />
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


                    <Button variant="contained"   style={{padding: 10}} color="primary" onClick={this.showNotifications}>
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
