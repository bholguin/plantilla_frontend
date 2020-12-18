import React,{Component, Fragment} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import ImgQueso from '../../../00_utilities/img/queso.jpg';
import * as actions from '../../../01_actions/index';
import {MyTextFieldSimple} from '../../../00_utilities/fields/index';

import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles({
      root: {
        color: 'white',
      },
    });

class Login extends Component{
 constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundColor = "#F0EEEE";
    }
    onSubmit(e) {
        console.log(e, 'login')
        const {username, password} = e;
        this.props.login(username, password);
    }

    render(){

    const {
            handleSubmit,
            submitting,
            auth,
            pristine
        } = this.props;
        if (auth.isAuthenticated) {
            return <Redirect to="/app"/>
        }
        console.log(auth, 'auth')
        const error_login = auth && auth.errors ? auth.errors : null;
        const mensaje_error = error_login ;
         return(
            <Fragment>
                <Card style={{width: '30%', margin: '0 auto', marginTop: '100px', backgroundColor:'#3D4158'}}>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                         <CardMedia
                            style={{height: 0, paddingTop: '55%'}}
                            image={ImgQueso}
                            title="Quesos"
                        />
                        <CardContent>
                            <MyTextFieldSimple
                                name='username'
                                nombre='Nombre de Usuario'
                                className='col-12'
                                onChange={() => {
                                    this.props.clear_authentication_errors();
                                }}
                            />
                            <MyTextFieldSimple
                                name='password'
                                nombre='Contraseña'
                                className={'col-12'}
                                type='password'
                                autoFocus={true}
                                onChange={() => {
                                    this.props.clear_authentication_errors();
                                }}
                            />
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                className='col-12'
                                style={{width: '100%', backgroundColor:'#F0EEEE'}}
                                disabled={submitting || pristine}
                                type='submit'
                            >
                                Ingresar
                            </Button>
                        </CardActions>
                    </form>
                    {
                        mensaje_error &&
                        <div className='mt-3'>
                            <Typography variant="caption" gutterBottom color="error">
                                {mensaje_error}
                            </Typography>
                        </div>
                    }
                </Card>
            </Fragment>
         )
    }
}

function mapPropsToState(state) {
    return {
        auth: state.auth
    }
}

Login = reduxForm({
    form: "loginForm",
    asyncBlurFields: ['username'],
    enableReinitialize: true
})(Login);

export default connect(mapPropsToState, actions)(Login);