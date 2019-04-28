import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

import * as cons from '../../res/values/constants'
// import 'typeface-roboto';
class TestPage extends React.Component {
    /*function get_post_desc() {
      return (

      );

  }*/
    constructor(props){
        super(props);
        this.state = {
            multiline:''
        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    getFile(){
        return document.getElementById("fileUpload").file[0];
    }

    render() {

        return (

            <div className="post">
                <Button variant = "contained" onClick={() => (cons.ServerTest())}>
                    <Typography>
                        Texto
                    </Typography>
                </Button>
                <input type = "file" id = 'fileUpload' />
                <Button id = "file_btn" variant = "contained" onClick={() => (cons.ServerTest(document.getElementById("fileUpload").file[0]))} >
                    <Typography>
                        subir
                    </Typography>
                </Button>
            </div>
        );
    }
}

export default TestPage;