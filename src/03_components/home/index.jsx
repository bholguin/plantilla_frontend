import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Workspace from '../../workspace';

const theme = createMuiTheme({
    overrides: {
        MuiSvgIcon: {
            root: {
                width: '3em',
                height: '3em'
            }
        }
    }
})


const useStyles = makeStyles({
    opciones: {
        textAlign: 'center',
        marginLeft: '20px',
        verticalAlign: 'super',
        textDecoration: 'none !important',
        color: '#4d4343  !important',
        icono: {
            fontSize: '200px'
        },
        texto: {
            fontSize: '100px'
        },
        linkIcons: {
            marginLeft: '20px',
            verticalAlign: 'super',
            textDecoration: 'none !important',
            color: '#4d4343  !important'
        },
        ppp: {
            width: '3em',
            height: '3em'
        }
    },

});

const Home = () => {
    const classes = useStyles();
    return (
        <Workspace>
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={4} className={classes.opciones}>
                        <Link to='/app/config' className={classes.opciones.linkIcons}>
                            <SettingsApplications classes={{
                                root: classes.opciones.ppp
                            }} />
                            <Typography className={classes.opciones.texto}>Configuracion</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={4} className={classes.opciones}>
                        <LocalLibrary className={classes.opciones.icono} />
                        <Typography className={classes.opciones.texto}>Inventario</Typography>
                    </Grid>
                </Grid>
            </Fragment>
        </Workspace>
    );
}


export default Home;