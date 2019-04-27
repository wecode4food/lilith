import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
// import 'typeface-roboto';
class Post extends React.Component {
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

    render() {

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
