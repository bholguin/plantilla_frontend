import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DonutSmall from '@material-ui/icons/DonutSmall';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Workspace from '../../workspace';
import IconPanel from '../../00_utilities/icon_wrapper'
import {useHome} from "./hook"
const useStyles = makeStyles({
    opciones: {
        textAlign: 'center',
    }
});

const Home = () => {
    const classes = useStyles();
    useHome()
    return (
        <Workspace>
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={4} className={classes.opciones}>
                        <IconPanel>
                            <Link to='/app/config'>
                                <SettingsApplications />
                                <Typography>Configuracion</Typography>
                            </Link>
                        </IconPanel>
                    </Grid>
                    <Grid item xs={4} className={classes.opciones}>
                        <IconPanel>
                            <Link to='/app/sig'>
                                <DonutSmall />
                                <Typography>SIG</Typography>
                            </Link>
                        </IconPanel>
                    </Grid>
                </Grid>
            </Fragment>
        </Workspace>
    );
}


export default Home;