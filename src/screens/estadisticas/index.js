import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/es/Typography/Typography";
import 'typeface-roboto';

class Estadistica extends React.Component {
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
            <div >

            </div>

        );
    }


}

export default Estadistica;
