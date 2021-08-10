//Dependecias
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


//iconos
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import DonutSmall from '@material-ui/icons/DonutSmall';
import Home from '@material-ui/icons/Home';

import { header_app } from '../css';

import { useHeader } from "./hook";

const Header = (props) => {

    const {
        open,
        handleDrawer,
        Logout
    } = useHeader()

    const { classes, theme, body, place } = props;
    return (
        <div className={classes.root}>
            <AppBar
                className={classNames(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar disableGutters={open} className={classes.toolbar_color}>
                    <div className={classes.widthHeaderMenu}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawer}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={classes.widthHeaderModule}>
                        {/* div para mostrar la variable con la ubicacion actual del usuario, 1/12/2018 */}
                        {place}
                    </div>
                    <div className={classes.widthHeaderLogout}>
                        <Button className={classes.logout} onClick={() => Logout()}>salir</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawer}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <List>
                    <Link to="/" className={classes.linkIcons}>
                        <Home /><span className={classes.IconTag}>Home</span>
                    </Link>
                </List>
                <List>
                    <Link to="/app/config" className={classes.linkIcons}>
                        <SettingsApplications /><span className={classes.IconTag} >Configuracion</span>
                    </Link>
                </List>
                <List>
                    <Link to="/app/sig" className={classes.linkIcons}>
                    <DonutSmall /><span className={classes.IconTag} >SIG</span>
                    </Link>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {body}
            </main>
        </div >

    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    body: PropTypes.any.isRequired
};


export default withStyles(header_app, { withTheme: true })(Header);