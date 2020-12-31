import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

import LocalLibrary from '@material-ui/icons/LocalLibrary';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Workspace from '../../workspace';

const mystyile = {
    opciones: {
        textAlign: 'center',
        marginLeft: '20px',
        verticalAlign: 'super',
        textDecoration: 'none !important',
        color: '#4d4343  !important',
        icono: {
            fontSize: '100px'
        },
        texto: {
            fontSize: '20px'
        },
        linkIcons: {
            marginLeft: '20px',
            verticalAlign: 'super',
            textDecoration: 'none !important',
            color: '#4d4343  !important'
        }
    },

};

const Home = () => {
    return (
        <Workspace>
            <div>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={4} style={mystyile.opciones}>
                            <Link to='/app/config' className={{ textDecoration: 'none' }}>
                                <SettingsApplications style={mystyile.opciones.icono} />
                                <Typography style={mystyile.opciones.texto}>Configuracion</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4} style={mystyile.opciones}>
                            <LocalLibrary style={mystyile.opciones.icono} />
                            <Typography style={mystyile.opciones.texto}>Inventario</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Workspace>
    );
}


export default Home;