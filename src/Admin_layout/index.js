import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import Grow from "@material-ui/core/es/Grow/Grow";
import Typography from "@material-ui/core/es/Typography/Typography";
import MenuList from "@material-ui/core/es/MenuList/MenuList";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});
class AdminLayout extends React.Component {

    render() {

        const {children} = this.props;
        return (
            <Fragment>
            <div className="App">
                <div class="sidenav">
                <ul>
                    <li><a href="#">Retos</a></li>
                    <li><a href="#">Encuesta</a></li>
                    <li><a href="#">Estadisticas</a></li>
                    <li><a href="#">Gestion de contenido</a></li>
                  </ul>
                </div>
                <main>
                    <div/>
                    {children}
                </main>

            </div>
            </Fragment>
        );
    }
}

export default AdminLayout;
