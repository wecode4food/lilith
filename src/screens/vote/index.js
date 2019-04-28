import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Typography from '@material-ui/core/Typography';
import Forum from '@material-ui/icons/Forum';

import Paper from '@material-ui/core/Paper';
class Vote extends React.Component {

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

            <div className="cont_txt">
                <h2>tittle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus felis lorem, sed dignissim quam ultrices vitae. Quisque a dictum ligula, at viverra quam</p>
            </div>

            <br/>


            <div className = "post_visualization" id="post_v2">
            <Paper className={this.props.root} style={{padding:'1em'}} elevation={1}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p"  style={{textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tincidunt risus. Suspendisse a diam fringilla, feugiat risus ut, semper libero.
              </Typography>
              <div className="post_adds">
                <ul className="vote_info">
                    <li><Forum/><label className="numero_mensajes"></label></li>

                </ul>
              </div>
            </Paper>
            </div>

            <div className = "post_visualization" id="post_v3">
            <Paper className={this.props.root} style={{padding:'1em'}} elevation={1}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p" style={{textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tincidunt risus. Suspendisse a diam fringilla, feugiat risus ut, semper libero.
              </Typography>
              <div className="post_adds">
              <ul className="vote_info">
                  <li><Forum/><label className="numero_mensajes"></label></li>

              </ul>
              </div>
            </Paper>
            </div>

            <div className = "post_visualization" id="post_v4">
            <Paper className={this.props.root} style={{padding:'1em'}} elevation={1}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p" style={{textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tincidunt risus. Suspendisse a diam fringilla, feugiat risus ut, semper libero.
              </Typography>
              <div className="post_adds">
              <ul className="vote_info">
                  <li><Forum/><label className="numero_mensajes"></label></li>

              </ul>
              </div>
            </Paper>
            </div>

            </div>
            );
    }
}

export default Vote;
