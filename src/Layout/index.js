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
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
//import 'typeface-roboto';

class Layout extends React.Component {

    render() {

        const {children} = this.props;
        return (
            <Fragment>
                <div className="App">
                    <nav position="static" class = "gradient">

                        <Toolbar>
                            <Grid justify="space-between"
                                  container
                                  spacing={24}>
                                <Grid item>
                                    <MenuList>
                                        <MenuItem  component={Link} to="/">
                                            <Typography>
                                                Titulo
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Grid>
                                <Grid item>
                                    <MenuList>
                                        <Button component={Link} to="/login" color="inherit">Login</Button>
                                        <Button component={Link} to="/register" color="inherit">Register</Button>
                                    </MenuList>
                                </Grid>
                            </Grid>
                        </Toolbar>

                    </nav>
                    <main>
                        <div/>
                        {children}
                    </main>
                    <footer>

                        <div class="s">
                          <p>Wecode4food 2019</p>
                        </div>

                    </footer>
                </div>
            </Fragment>
        );
    }
}

export default Layout;
