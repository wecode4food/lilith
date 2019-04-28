import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/es/Typography/Typography";
import 'typeface-roboto';

class Admretos extends React.Component {
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
            <div id="cont_crear_retos">

            </div>

        );
    }


}

export default Admretos;
