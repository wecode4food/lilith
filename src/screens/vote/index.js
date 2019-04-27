import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
class Vote extends React.Component {
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

          <div className="vote_container">
          <FormControl >
              <InputLabel htmlFor="categoria-select">Categoria</InputLabel>
              <Select
                  value={this.state.barrio}
                  onChange={this.handleChange('Categoria')}
                  inputProps={{
                      name: 'Categoria',
                      id: 'categoria',
                  }}
              >
                  <MenuItem value={"opcion1"}>Opcion 1</MenuItem>
                  <MenuItem value={"opcion2"}>Opcion 2</MenuItem>
                  <MenuItem value={"opcion3"}>Opcion 3</MenuItem>
                  <MenuItem value={"opcion4"}>Opcion 4</MenuItem>
                  <MenuItem value={"opcion5"}>Opcion 5</MenuItem>
              </Select>
          </FormControl>
          </div>

        );
    }
}

export default Vote;
