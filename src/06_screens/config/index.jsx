import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Business from '@material-ui/icons/Business';
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
                        <Link to='/app/config/empresas'>
                            <Business />
                            <Typography>Empresas</Typography>
                        </Link>
                    </IconPanel>
                </Grid>
            </Grid>
        </Workspace>
    );
}

export default Config;