import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import AirportShuttle from '@material-ui/icons/AirportShuttle';
import Workspace from '../../workspace';
import IconPanel from '../../00_utilities/icon_wrapper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    opciones: {
        textAlign: 'center',
    }
});

const Config = () => {
    const classes = useStyles();
    return (
        <Workspace>
            <div>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={4} className={classes.opciones}>
                            <IconPanel>
                                <Link to='/app/config/usuario'>
                                    <SupervisorAccount />
                                    <Typography >Usuarios</Typography>
                                </Link>
                            </IconPanel>
                        </Grid>
                        <Grid item xs={4} className={classes.opciones}>
                            <IconPanel>
                                <Link to='/app/config/'>
                                    <LocalLibrary />
                                    <Typography>Articulos</Typography>
                                </Link>
                            </IconPanel>
                        </Grid>
                        <Grid item xs={4} className={classes.opciones}>
                            <IconPanel>
                                <Link to='/app/config/'>
                                    <AirportShuttle />
                                    <Typography >Carros</Typography>
                                </Link>
                            </IconPanel>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Workspace>
    );
}

export default Config;