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
import Paper from '@material-ui/core/Paper';
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
                <div class="sidenav" position="static">
                <Paper className={this.props.paper} id="cont_menuli">
                  <MenuList>
                    <MenuItem component={Link} to="/AdminRetos">Retos</MenuItem>
                    <MenuItem>Encuesta</MenuItem>
                    <MenuItem>Estadisticas</MenuItem>
                    <MenuItem>Gestion de contenido</MenuItem>
                  </MenuList>
                </Paper>
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
