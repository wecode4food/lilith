import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';

import * as cons from '../../res/values/constants'
// import 'typeface-roboto';
class Post extends React.Component {
      /*function get_post_desc() {
        return (

        );

    }*/
    constructor(props){
      super(props);
      cons.serverStart();
      this.state = {
        multiline:'',
          data : null
      }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        firebase.database().ref('/post/').on("value", snapshot => {
            results = snapshot.val(); //siempre es snapshot.val() para tomar el json de la ruta
            console.log(snapshot.val());
            console.log(results)//esto es para mostrar
            let xd = Object.getOwnPropertyNames(results);
            this.setState({dataKeys: xd, getFckanSht: results});
        });
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        cons.webSocket.on('result', (arraytemp) => {
            this.setState({data: arraytemp });
        });
        cons.webSocket.on('result-item', (arraytemp) => {
            this.setState({keysThings: arraytemp });
        });
        return (

          <div className="post">
            <div class="post_description"><h3>Titulo y descripcion del card seleccionado de home</h3></div>
            <TextField
             id="outlined-multiline-flexible"
             label="Post"
             multiline
             rowsMax="8"
             value={this.state.multiline}
             onChange={this.handleChange('multiline')}
             className={this.props.textField}
             margin="normal"
             helperText="hello"
             variant="outlined"
             />
            {/*<Typography>{this.state.multiline}</Typography>*/}
          </div>

        );


    }
}

export default Post;
