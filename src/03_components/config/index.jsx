import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import AirportShuttle from '@material-ui/icons/AirportShuttle';
import Workspace from '../../workspace';

class Config extends Component{
    render(){
        const mystyile = {
            opciones: {
                textAlign: 'center',
                icono: {
                    fontSize: '100px'
                },
                texto: {
                    fontSize: '20px'
                }
            }
        };
        return (
            <Workspace>
                <div>
                    <div>
                        <Grid container spacing={3}>
                            <Grid item  xs={4} style={mystyile.opciones}>
                                <Link to='/app/config/usuario'>
                                    <SupervisorAccount style={mystyile.opciones.icono}/>
                                    <Typography style={mystyile.opciones.texto}>Usuarios</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={4} style={mystyile.opciones}>
                                <LocalLibrary style={mystyile.opciones.icono}/>
                                <Typography style={mystyile.opciones.texto}>Articulos</Typography>
                            </Grid>
                            <Grid item xs={4} style={mystyile.opciones}>
                                <AirportShuttle style={mystyile.opciones.icono}/>
                                <Typography style={mystyile.opciones.texto}>Carros</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Workspace>
        );
    }
}

export default Config;